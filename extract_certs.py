import re
import json
from bs4 import BeautifulSoup

def parse_html_to_json(html_file_path, json_output_path):
    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    certifications = []
    
    # Map classes to categories
    category_map = {
        'network': 'Network Security',
        'iam': 'Identity and Access Management',
        'engineer': 'Security Architecture and Engineering',
        'asset': 'Asset Security',
        'mgmt': 'Security and Risk Management',
        'testing': 'Security Assessment and Testing',
        'software': 'Software Development Security',
        'blueops': 'Security Operations (Blue Team)',
        'redops': 'Security Operations (Red Team)'
    }

    # Initial skill level (for items before the first label)
    current_skill_level = "Expert"

    # Find all relevant elements in order
    # We want 'a' tags (certifications) and 'div' tags with class 'skilllevelitem' (markers)
    all_elements = soup.find_all(['a', 'div'])
    
    for element in all_elements:
        # Check if it's a skill level marker
        if element.name == 'div' and 'skilllevelitem' in element.get('class', []):
            text = element.get_text(strip=True)
            if text in ['Expert', 'Intermediate', 'Beginner']:
                current_skill_level = text
            continue

        # Process only 'a' tags
        if element.name != 'a':
            continue

        class_list = element.get('class', [])
        
        # Determine category
        category = "Unknown"
        for cls in class_list:
            for key, value in category_map.items():
                if cls.startswith(key):
                    category = value
                    break
            if category != "Unknown":
                break
        
        # Skip if it's not one of our target classes
        if category == "Unknown":
            continue

        # Extract tooltip data
        tooltip_text = element.get('tooltiptext') or element.get('tooltipright') or element.get('tooltipleft') or element.get('tooltiptexttitle') or ""
        
        # Clean up tooltip text
        tooltip_lines = [line.strip() for line in tooltip_text.split('\n') if line.strip()]
        
        full_name = tooltip_lines[0] if tooltip_lines else ""
        details = tooltip_lines[1:] if len(tooltip_lines) > 1 else []
        
        cert_data = {
            "id": element.get_text(strip=True),
            "abbreviation": element.get_text(strip=True),
            "name": full_name,
            "details": details,
            "url": element.get('href', '#'),
            "category": category,
            "level": current_skill_level,
            "raw_tooltip": tooltip_text
        }
        
        certifications.append(cert_data)

    print(f"Extracted {len(certifications)} certifications.")
    
    with open(json_output_path, 'w', encoding='utf-8') as f:
        json.dump(certifications, f, indent=2)

if __name__ == "__main__":
    parse_html_to_json('Security-Certification-Roadmap9.html', 'certifications.json')
