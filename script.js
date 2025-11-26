document.addEventListener('DOMContentLoaded', () => {
    const certGrid = document.getElementById('certGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const noResults = document.getElementById('noResults');

    let certifications = [];

    // Category mapping for CSS classes
    const categoryClassMap = {
        'Network Security': 'cat-network',
        'Identity and Access Management': 'cat-iam',
        'Security Architecture and Engineering': 'cat-engineer',
        'Asset Security': 'cat-asset',
        'Security and Risk Management': 'cat-mgmt',
        'Security Assessment and Testing': 'cat-testing',
        'Software Development Security': 'cat-software',
        'Security Operations (Blue Team)': 'cat-blueops',
        'Security Operations (Red Team)': 'cat-redops'
    };

    // Load data from the global variable provided by data.js
    if (typeof certificationsData !== 'undefined') {
        certifications = certificationsData;
        populateCategories();
        renderCerts(certifications);
    } else {
        console.error('certificationsData is not defined. Make sure data.js is loaded.');
        noResults.textContent = 'Error loading data. Please check data.js.';
        noResults.classList.remove('hidden');
    }

    // Populate Category Filter
    function populateCategories() {
        const categories = new Set();
        certifications.forEach(cert => {
            if (cert.category && cert.category !== 'Unknown' && cert.category !== 'Skill Level Label') {
                categories.add(cert.category);
            }
        });

        const sortedCategories = Array.from(categories).sort();
        sortedCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // Render Certifications
    function renderCerts(certsToRender) {
        certGrid.innerHTML = '';
        
        if (certsToRender.length === 0) {
            noResults.classList.remove('hidden');
            return;
        } else {
            noResults.classList.add('hidden');
        }

        certsToRender.forEach(cert => {
            // Skip skill level labels if they were extracted
            if (cert.category === 'Skill Level Label') return;

            const card = document.createElement('div');
            const categoryClass = categoryClassMap[cert.category] || '';
            card.className = `cert-card ${categoryClass}`;

            // Join details with line breaks
            const detailsHtml = cert.details.map(line => `<div>${line}</div>`).join('');
            
            // Add level badge class
            const levelClass = cert.level ? `level-${cert.level.toLowerCase()}` : '';

            card.innerHTML = `
                <div class="card-header">
                    <div class="cert-category">${cert.category}</div>
                    ${cert.level ? `<div class="cert-level ${levelClass}">${cert.level}</div>` : ''}
                </div>
                <div class="cert-abbr">${cert.abbreviation}</div>
                <div class="cert-name">${cert.name || ''}</div>
                <div class="cert-details">${detailsHtml}</div>
                <a href="${cert.url}" target="_blank" class="cert-link">View Details</a>
            `;

            certGrid.appendChild(card);
        });
    }

    // Filter Logic
    function filterCerts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedLevel = levelFilter.value;

        const filtered = certifications.filter(cert => {
            const matchesSearch = (cert.abbreviation.toLowerCase().includes(searchTerm) || 
                                   cert.name.toLowerCase().includes(searchTerm));
            const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
            const matchesLevel = selectedLevel === 'All' || cert.level === selectedLevel;

            return matchesSearch && matchesCategory && matchesLevel;
        });

        renderCerts(filtered);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterCerts);
    categoryFilter.addEventListener('change', filterCerts);
    levelFilter.addEventListener('change', filterCerts);
});
