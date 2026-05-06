// Gallery data - you can easily add more items here
const galleryData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        theme: 'Dashboard Analytics',
        author: 'Carlos Silva',
        category: 'tecnologia',
        url: 'https://example.com'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        theme: 'E-commerce Platform',
        author: 'Maria Santos',
        category: 'negocios',
        url: 'https://example.com'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        theme: 'Creative Portfolio',
        author: 'Ana Oliveira',
        category: 'design',
        url: 'https://example.com'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        theme: 'Code Editor Theme',
        author: 'Pedro Costa',
        category: 'tecnologia',
        url: 'https://example.com'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        theme: 'Mobile Banking App',
        author: 'Lucia Ferreira',
        category: 'negocios',
        url: 'https://example.com'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
        theme: 'Learning Management',
        author: 'Roberto Almeida',
        category: 'educacao',
        url: 'https://example.com'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop',
        theme: 'Fitness Tracker',
        author: 'Julia Mendes',
        category: 'design',
        url: 'https://example.com'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        theme: 'Stock Trading',
        author: 'Andre Souza',
        category: 'negocios',
        url: 'https://example.com'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=600&fit=crop',
        theme: 'Online Course Platform',
        author: 'Fernanda Lima',
        category: 'educacao',
        url: 'https://example.com'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
        theme: 'Music Streaming',
        author: 'Rafael Nunes',
        category: 'tecnologia',
        url: 'https://example.com'
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
        theme: 'Restaurant Booking',
        author: 'Camila Rocha',
        category: 'design',
        url: 'https://example.com'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        theme: 'CRM System',
        author: 'Lucas Barbosa',
        category: 'negocios',
        url: 'https://example.com'
    }
];

// DOM Elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize gallery
function init() {
    renderGallery(galleryData);
    setupEventListeners();
}

// Render gallery items
function renderGallery(items) {
    gallery.innerHTML = '';

    if (items.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    items.forEach((item, index) => {
        const card = createGalleryCard(item, index);
        gallery.appendChild(card);
    });
}

// Create individual gallery card
function createGalleryCard(item, index) {
    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'gallery-item';
    link.style.animationDelay = `${index * 0.1}s`;

    const categoryLabels = {
        'design': 'Design',
        'tecnologia': 'Tecnologia',
        'negocios': 'Negócios',
        'educacao': 'Educação'
    };

    link.innerHTML = `
        <div class="image-container">
            <img src="${item.image}" alt="${item.theme}" loading="lazy">
            <div class="overlay">
                <span class="visit-btn">Visitar Site</span>
            </div>
            <span class="category-tag">${categoryLabels[item.category]}</span>
        </div>
        <div class="info">
            <h3 class="theme">
                <i class="fas fa-star"></i>
                ${item.theme}
            </h3>
            <p class="author">
                <i class="fas fa-user-circle"></i>
                ${item.author}
            </p>
        </div>
    `;

    return link;
}

// Filter and search functionality
function filterAndSearch() {
    let filtered = galleryData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => item.category === currentFilter);
    }

    // Apply search
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(item =>
            item.theme.toLowerCase().includes(searchLower) ||
            item.author.toLowerCase().includes(searchLower)
        );
    }

    renderGallery(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        filterAndSearch();
    });

    // Search button
    searchBtn.addEventListener('click', () => {
        currentSearch = searchInput.value;
        filterAndSearch();
    });

    // Enter key in search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value;
            filterAndSearch();
        }
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and render
            currentFilter = btn.getAttribute('data-filter');
            filterAndSearch();
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);