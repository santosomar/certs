# Cybersecurity Certification Roadmap - Interactive Tool

This project is a modernized, interactive version of the Security Certification Roadmap. It allows users to explore cybersecurity certifications, filter them by domain and level, and visualize the data through interactive charts.

## Features
- **Interactive Search**: Quickly find certifications by name or abbreviation.
- **Filtering**: Filter certifications by domain/category (e.g., Network Security, Red Team) and skill level.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Analytics Dashboard**: View statistics on certification costs, distribution by domain, and skill levels via `visualization_stats.html`.
- **Sunburst Visualization**: Explore the hierarchy of certifications in an interactive sunburst chart via `visualization_sunburst.html`.
- **Cost vs. Level Scatter Plot**: Visualize the relationship between certification cost and skill level via `visualization_scatter.html`.
- **Data-Driven**: Certifications are loaded from `data.js`, making updates easier.

## Prerequisites
- Python 3.13+
- [uv](https://github.com/astral-sh/uv) (for dependency management)

## Setup & Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   uv sync
   ```

## How to Use
1. **View the Roadmap**: Open `index.html` in your web browser.
2. **Explore Data**:
   - Use the search bar or dropdown menus to filter certifications.
   - Click "View Statistics" to see the dashboard.
   - Click "Sunburst Chart" to see the hierarchical view.
   - Click "Cost vs Level" to explore the scatter plot.

## Updating Data
The certification data is extracted from the original HTML source and stored in `certifications.json`, then converted to `data.js` for the web application.

1. **Prepare Source File**: Ensure you have the original `Security-Certification-Roadmap9.html` file in the project root.

2. **Extract Data**:
   Run the extraction script to update `certifications.json`:
   ```bash
   uv run extract_certs.py
   ```

3. **Convert to JS**:
   Convert the JSON data to a JavaScript file (`data.js`) so it can be loaded by the browser:
   ```bash
   uv run python -c "import json; with open('certifications.json', 'r') as f: data = json.load(f); with open('data.js', 'w') as f: f.write('const certificationsData = ' + json.dumps(data, indent=2) + ';')"
   ```

## Project Structure
- `index.html`: Main entry point (Roadmap view).
- `visualization_stats.html`: Statistics dashboard.
- `visualization_sunburst.html`: Sunburst chart visualization.
- `visualization_scatter.html`: Cost vs. Level scatter plot.
- `extract_certs.py`: Python script to parse the original HTML and generate JSON.
- `style.css`: Stylesheet for the application.
- `script.js`: Main logic for the roadmap view.
- `data.js`: Contains the certification data (generated).

## Original Source
Based on the [Security Certification Roadmap](https://pauljerimy.com/security-certification-roadmap/) by Paul Jerimy.
