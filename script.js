let galleryData = [];

// DOM Elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterContainer = document.querySelector('.filter-buttons');
const noResults = document.getElementById('noResults');
const totalSites = document.getElementById('totalSites');
const totalCategorias = document.getElementById('totalCategorias');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize gallery
async function init() {
    setupEventListeners();
    await loadGalleryData();
}

async function loadGalleryData() {
    try {
        const response = await fetch('site1/dados.txt', { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Nao foi possivel carregar o ficheiro de dados.');
        }

        const data = await response.json();
        galleryData = data.map(normalizeItem);
        updateStats();
        renderFilters();
        renderGallery(galleryData);
    } catch (error) {
        gallery.innerHTML = `
            <div class="data-error">
                <i class="fas fa-triangle-exclamation" aria-hidden="true"></i>
                <p>Nao foi possivel carregar os dados do portal.</p>
                <small>Abra o portal atraves do GitHub Pages ou de um servidor local para permitir a leitura de site1/dados.txt.</small>
            </div>
        `;
        console.error(error);
    }
}

function normalizeItem(item) {
    return {
        id: item.id,
        image: item.imagem || item.image,
        theme: item.tema || item.theme,
        author: item.autor || item.author,
        category: item.categoria || item.category || 'Outros',
        url: item.url,
        description: item.descricao || item.description || ''
    };
}

function updateStats() {
    const categories = new Set(galleryData.map(item => item.category));
    totalSites.textContent = galleryData.length;
    totalCategorias.textContent = categories.size;
}

function renderFilters() {
    const categories = [...new Set(galleryData.map(item => item.category))].sort((a, b) => a.localeCompare(b, 'pt'));

    filterContainer.innerHTML = '<button class="filter-btn active" data-filter="all">Todos</button>';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.dataset.filter = category;
        button.textContent = category;
        filterContainer.appendChild(button);
    });
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

    link.innerHTML = `
        <div class="image-container">
            <img src="${item.image}" alt="${item.theme}" loading="lazy">
            <div class="overlay">
                <span class="visit-btn">Visitar Site</span>
            </div>
            <span class="category-tag">${item.category}</span>
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
            <p class="description">${item.description}</p>
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
            item.author.toLowerCase().includes(searchLower) ||
            item.category.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
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

    filterContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.filter-btn');

        if (!button) {
            return;
        }

        filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentFilter = button.dataset.filter;
        filterAndSearch();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);