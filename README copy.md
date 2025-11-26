# Cybersecurity Certification Roadmap - Interactive Tool

This project is a modernized, interactive version of the Security Certification Roadmap.

## Features
- **Interactive Search**: Quickly find certifications by name or abbreviation.
- **Filtering**: Filter certifications by domain/category (e.g., Network Security, Red Team).
- **Responsive Design**: Works well on desktop and mobile devices.
- **Data-Driven**: Certifications are loaded from `data.js`, making updates easier.

## How to Use
1. Open `index.html` in your web browser.
2. Use the search bar or dropdown menu to explore certifications.

## Updating Data
The certification data is stored in `certifications.json` and then converted to `data.js` for local compatibility.

1. Run the extraction script:
   ```bash
   python3 extract_certs.py
   ```
   This updates `certifications.json`.

2. Convert to JS format:
   ```bash
   python3 -c "import json; with open('certifications.json', 'r') as f: data = json.load(f); with open('data.js', 'w') as f: f.write('const certificationsData = ' + json.dumps(data, indent=2) + ';')"
   ```

## Original Source
Based on the [Security Certification Roadmap](https://pauljerimy.com/security-certification-roadmap/) by Paul Jerimy.
Original file: `Security-Certification-Roadmap9.html`
