# Contributing to Cybersecurity Certification Roadmap

Thank you for considering contributing to this project! We welcome contributions from the community to keep the certification data accurate and up-to-date, as well as improvements to the codebase.

## How to Contribute

### Reporting Issues
If you find a bug or have a feature request, please open an issue on GitHub.

### Contributing Code
1. Fork the repository.
2. Create a new branch for your feature or fix (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## updating Certification Data

The certification data drives the entire application. Since the original data is scraped from an HTML source, we have a specific workflow for updates.

**Important**: The application reads data from `data.js`, which is generated from `certifications.json`. **Do not edit `data.js` directly.**

### Method 1: Editing `certifications.json` (Recommended for small fixes)
If you want to correct a typo, update a URL, or adjust a price for an existing certification:

1. Open `certifications.json`.
2. Find the certification entry you want to modify.
3. Make your changes (ensure valid JSON format).
4. Run the conversion command to update `data.js`:
   ```bash
   uv run python -c "import json; with open('certifications.json', 'r') as f: data = json.load(f); with open('data.js', 'w') as f: f.write('const certificationsData = ' + json.dumps(data, indent=2) + ';')"
   ```
5. Verify your changes by opening `index.html`.

### Method 2: Adding New Certifications
To add a new certification, add a new object to the `certifications.json` array following this structure:

```json
{
  "id": "CERT-ABBR",
  "abbreviation": "CERT-ABBR",
  "name": "Full Certification Name",
  "details": [
    "$Exam Cost",
    "Exam Details"
  ],
  "url": "https://official-website.com",
  "category": "Network Security",
  "level": "Intermediate",
  "raw_tooltip": ""
}
```

Then run the conversion command as shown in Method 1.

### Method 3: Full Data Refresh (Advanced)
If you have a newer version of the original source HTML (`Security-Certification-Roadmap9.html` or newer):

1. Place the new HTML file in the project root.
2. Update `extract_certs.py` if the filename or structure has changed.
3. Run the extraction script:
   ```bash
   uv run extract_certs.py
   ```
4. Run the conversion command to update `data.js`.

## Data Structure

- **id**: Unique identifier (usually the abbreviation).
- **abbreviation**: Short code for the cert (e.g., "CISSP").
- **name**: Full name of the certification.
- **details**: Array of strings containing cost, prerequisites, etc.
- **url**: Direct link to the certification authority.
- **category**: The domain (e.g., "Network Security", "Identity and Access Management").
- **level**: "Beginner", "Intermediate", or "Expert".

## Development Setup

1. Install [uv](https://github.com/astral-sh/uv).
2. Run `uv sync` to install dependencies.
3. Use `uv run` to execute scripts.

