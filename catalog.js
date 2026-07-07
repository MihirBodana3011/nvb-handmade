// ===== NVB HANDMADE - CATALOG BUILDER LOGIC =====

document.addEventListener('DOMContentLoaded', () => {
    // 1. DEFAULT PRODUCTS DATA
    const defaultProducts = [
        {
            id: 'p1',
            name: "Beaded Butterfly Charm",
            category: "Keychains & Charms",
            price: "99",
            sku: "NVB-001",
            desc: "Delicate and colorful beaded butterfly charm, perfect for bags, keys, or phone cases.",
            img: "images/butterfly-charm.jpg",
            enabled: true
        },
        {
            id: 'p2',
            name: "Butterfly Hair Ties (Set of 2)",
            category: "Hair Accessories",
            price: "120",
            sku: "NVB-002",
            desc: "Adorable hand-twisted pipe cleaner butterfly hair ties. Gentle on hair and super cute!",
            img: "images/butterfly-hair-ties.jpg",
            enabled: true
        },
        {
            id: 'p3',
            name: "Premium Clip Collection",
            category: "Hair Accessories",
            price: "249",
            sku: "NVB-003",
            desc: "A beautiful assortment of handmade hair clips in pastel shades, perfect for gifting.",
            img: "images/clip-collection.jpg",
            enabled: true
        },
        {
            id: 'p4',
            name: "Hand-knit Crochet Rakhi",
            category: "Festive Collection",
            price: "149",
            sku: "NVB-004",
            desc: "Beautifully hand-crafted crochet Rakhi made with premium soft yarn. Eco-friendly and reusable.",
            img: "images/crochet-rakhi.jpg",
            enabled: true
        },
        {
            id: 'p5',
            name: "Cute Mascot Keychains",
            category: "Keychains & Charms",
            price: "129",
            sku: "NVB-005",
            desc: "Charming plush pipe cleaner keychains with cute characters. Handcrafted with love.",
            img: "images/cute-keychains.jpg",
            enabled: true
        },
        {
            id: 'p6',
            name: "Plush Pipe Cleaner Puppy",
            category: "Showpieces & Decor",
            price: "299",
            sku: "NVB-006",
            desc: "Ultra-cute miniature puppy figure handcrafted from fuzzy pipe cleaners. A perfect desk buddy.",
            img: "images/cute-puppy.jpg",
            enabled: true
        },
        {
            id: 'p7',
            name: "Everlasting Flower Bouquet",
            category: "Flowers & Bouquets",
            price: "499",
            sku: "NVB-007",
            desc: "A gorgeous, vibrant bouquet of handmade pipe cleaner flowers. Won't wither, lasts forever!",
            img: "images/flower-bouquet.jpg",
            enabled: true
        },
        {
            id: 'p8',
            name: "Handmade Flower Headband",
            category: "Hair Accessories",
            price: "180",
            sku: "NVB-008",
            desc: "A sweet headband adorned with soft handmade pipe cleaner flowers. Perfect for special occasions.",
            img: "images/flower-headband.jpg",
            enabled: true
        },
        {
            id: 'p9',
            name: "Mini Flower Pookie Pot",
            category: "Showpieces & Decor",
            price: "199",
            sku: "NVB-009",
            desc: "Adorable mini pipe cleaner flower in a tiny pot. Adds a splash of joy and color to any space.",
            img: "images/flower-pookie.jpg",
            enabled: true
        },
        {
            id: 'p10',
            name: "Handmade Hair Bow & Pin Set",
            category: "Hair Accessories",
            price: "150",
            sku: "NVB-010",
            desc: "Set of colorful handmade pipe cleaner hair bows and pins. Lightweight and cute.",
            img: "images/hair-accessories.jpg",
            enabled: true
        },
        {
            id: 'p11',
            name: "Decorated Floral Hair Claw",
            category: "Hair Accessories",
            price: "199",
            sku: "NVB-011",
            desc: "A sturdy, premium hair claw clip embellished with beautiful handcrafted pipe cleaner flowers.",
            img: "images/hair-claw.jpg",
            enabled: true
        },
        {
            id: 'p12',
            name: "Pipe Cleaner Animal Keychains",
            category: "Keychains & Charms",
            price: "129",
            sku: "NVB-012",
            desc: "Adorable handcrafted animal keychains. Very soft to touch and durable.",
            img: "images/pipe-cleaner-keychains.jpg",
            enabled: true
        },
        {
            id: 'p13',
            name: "Dainty Purple Flower Keychain",
            category: "Keychains & Charms",
            price: "99",
            sku: "NVB-013",
            desc: "Elegant handmade purple flower keychain with a small beaded accent.",
            img: "images/purple-flower-keychain.jpg",
            enabled: true
        },
        {
            id: 'p14',
            name: "Colorful Rainbow Keychain",
            category: "Keychains & Charms",
            price: "110",
            sku: "NVB-014",
            desc: "Bright and happy handcrafted pipe cleaner rainbow keychain to cheer up your day.",
            img: "images/rainbow-keychain.jpg",
            enabled: true
        },
        {
            id: 'p15',
            name: "Charming Pink Rose Keychain",
            category: "Keychains & Charms",
            price: "119",
            sku: "NVB-015",
            desc: "A beautiful handcrafted pink rose keychain. A romantic and cute accessory for bags.",
            img: "images/rose-keychain.jpg",
            enabled: true
        },
        {
            id: 'p16',
            name: "Fuzzy Teddy Bear Keychain",
            category: "Keychains & Charms",
            price: "139",
            sku: "NVB-016",
            desc: "Cute handcrafted fuzzy teddy bear keychain. Perfect gift for your friends!",
            img: "images/teddy-keychain.jpg",
            enabled: true
        },
        {
            id: 'p17',
            name: "Handmade Tulip Night Light",
            category: "Showpieces & Decor",
            price: "599",
            sku: "NVB-017",
            desc: "Stunning handcrafted tulip night lamp. Emits a soft, warm glow. Perfect bedside decorative piece.",
            img: "images/tulip-lamp.jpg",
            enabled: true
        }
    ];

    // Default metadata settings
    const defaultMetadata = {
        title: "NVB Handmade",
        subtitle: "Exclusive Cute Handmade Collection",
        whatsapp: "+91 90232 43011",
        instagram: "@nvb_handmade",
        website: "https://www.nvbhandmade.store/",
        footerText: "Made with ♥ by NVB Handmade | Pan India Shipping Available",
        backCoverMsg: "Thank you for exploring our handmade creations! Each piece is crafted with love and care. For custom orders, get in touch with us.",
        logoImg: "images/hero-brand.jpg"
    };

    // Default layout preferences
    const defaultLayout = {
        theme: "pink",
        orientation: "portrait",
        itemsPerPage: 4,
        showTOC: true,
        showThankYou: true,
        showSparkles: true,
        showPrices: true,
        showSKUs: true
    };

    // 2. STATE MANAGER VARIABLES
    let products = JSON.parse(localStorage.getItem('nvb_catalog_products')) || [...defaultProducts];
    let metadata = { ...defaultMetadata }; // Lock metadata to defaults (non-editable)
    let layout = { ...defaultLayout, ...JSON.parse(localStorage.getItem('nvb_catalog_layout') || '{}') };
    let currentZoom = 0.75; // Zoom scale factor for visual screen preview
    let selectedProductId = products.length > 0 ? products[0].id : null;

    // DOM Elements
    const catalogContainer = document.getElementById('catalogContainer');
    const productManagerList = document.getElementById('productManagerList');
    const editDetailsPanel = document.getElementById('editDetailsPanel');
    const printModal = document.getElementById('printModal');
    const toast = document.getElementById('toast');

    // UI Input Elements
    const inputCatalogTitle = document.getElementById('catalogTitle');
    const inputCatalogSubtitle = document.getElementById('catalogSubtitle');
    const inputCatalogWhatsapp = document.getElementById('catalogWhatsapp');
    const inputCatalogInstagram = document.getElementById('catalogInstagram');
    const inputCatalogWebsite = document.getElementById('catalogWebsite');
    const inputCatalogFooter = document.getElementById('catalogFooter');
    const inputCatalogBackCover = document.getElementById('catalogBackCoverMsg');
    
    // Toggle Inputs
    const checkShowTOC = document.getElementById('toggleTOC');
    const checkShowThankYou = document.getElementById('toggleThankYou');
    const checkShowSparkles = document.getElementById('toggleSparkles');
    const checkShowPrices = document.getElementById('togglePrices');
    const checkShowSKUs = document.getElementById('toggleSKUs');

    // Product Details Editor Inputs
    const editName = document.getElementById('editName');
    const editCategory = document.getElementById('editCategory');
    const editPrice = document.getElementById('editPrice');
    const editSku = document.getElementById('editSku');
    const editDesc = document.getElementById('editDesc');
    const editEnabled = document.getElementById('editEnabled');

    // 3. THEME DEFINITIONS
    const themes = {
        pink: {
            primary: '#ec4899',
            secondary: '#a855f7',
            light: '#fdf2f8',
            dark: '#be185d',
            gradient: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
            fontTitle: "'Playfair Display', serif",
            fontBody: "'Poppins', sans-serif"
        },
        purple: {
            primary: '#a855f7',
            secondary: '#ec4899',
            light: '#faf5ff',
            dark: '#6b21a8',
            gradient: 'linear-gradient(135deg, #a855f7 0%, #db2777 100%)',
            fontTitle: "'Playfair Display', serif",
            fontBody: "'Poppins', sans-serif"
        },
        gold: {
            primary: '#b8860b',
            secondary: '#262626',
            light: '#fffdf5',
            dark: '#8b6508',
            gradient: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
            fontTitle: "'Playfair Display', serif",
            fontBody: "'Poppins', sans-serif"
        },
        dark: {
            primary: '#171717',
            secondary: '#525252',
            light: '#f5f5f5',
            dark: '#0a0a0a',
            gradient: 'linear-gradient(135deg, #262626 0%, #000000 100%)',
            fontTitle: "'Poppins', sans-serif",
            fontBody: "'Poppins', sans-serif"
        }
    };

    // 4. PERSISTENCE HELPERS
    function saveState() {
        localStorage.setItem('nvb_catalog_products', JSON.stringify(products));
        localStorage.setItem('nvb_catalog_metadata', JSON.stringify(metadata));
        localStorage.setItem('nvb_catalog_layout', JSON.stringify(layout));
    }

    // 5. TOAST NOTIFICATION
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    // 6. ZOOM MANAGEMENT
    function updateZoom(newZoom) {
        currentZoom = Math.max(0.4, Math.min(1.5, newZoom));
        catalogContainer.style.transform = `scale(${currentZoom})`;
        document.getElementById('zoomPercentage').textContent = `${Math.round(currentZoom * 100)}%`;
    }

    // Setup zoom buttons
    document.getElementById('zoomIn').addEventListener('click', () => updateZoom(currentZoom + 0.05));
    document.getElementById('zoomOut').addEventListener('click', () => updateZoom(currentZoom - 0.05));
    document.getElementById('zoomReset').addEventListener('click', () => updateZoom(0.75));

    // 7. INITIALIZE UI CONTROLS VALUES
    function initControlValues() {
        inputCatalogTitle.value = metadata.title || '';
        inputCatalogSubtitle.value = metadata.subtitle || '';
        inputCatalogWhatsapp.value = metadata.whatsapp || '';
        inputCatalogInstagram.value = metadata.instagram || '';
        inputCatalogWebsite.value = metadata.website || '';
        inputCatalogFooter.value = metadata.footerText || '';
        inputCatalogBackCover.value = metadata.backCoverMsg || '';

        checkShowTOC.checked = layout.showTOC !== false;
        checkShowThankYou.checked = layout.showThankYou !== false;
        checkShowSparkles.checked = layout.showSparkles !== false;
        checkShowPrices.checked = layout.showPrices !== false;
        checkShowSKUs.checked = layout.showSKUs !== false;

        // Set theme chip active
        document.querySelectorAll('.theme-chip').forEach(chip => {
            if (chip.dataset.theme === layout.theme) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });

        // Set orientation chip active
        document.querySelectorAll('.orientation-chip').forEach(chip => {
            if (chip.dataset.orientation === (layout.orientation || 'portrait')) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });

        // Set layout option active
        document.querySelectorAll('.layout-option').forEach(option => {
            if (parseInt(option.dataset.layout) === layout.itemsPerPage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Apply theme color classes to body stylesheet variables dynamically
        applyThemeVariables();
        applyPageOrientation();
    }

    function applyPageOrientation() {
        let styleEl = document.getElementById('print-orientation-style');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'print-orientation-style';
            document.head.appendChild(styleEl);
        }
        const orient = layout.orientation || 'portrait';
        if (orient === 'landscape') {
            styleEl.innerHTML = `
                @media print {
                    @page {
                        size: A4 landscape !important;
                        margin: 0 !important;
                    }
                }
            `;
            catalogContainer.classList.add('landscape-mode');
        } else {
            styleEl.innerHTML = `
                @media print {
                    @page {
                        size: A4 portrait !important;
                        margin: 0 !important;
                    }
                }
            `;
            catalogContainer.classList.remove('landscape-mode');
        }
    }

    function applyThemeVariables() {
        const theme = themes[layout.theme] || themes.pink;
        document.documentElement.style.setProperty('--theme-primary', theme.primary);
        document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
        document.documentElement.style.setProperty('--theme-light', theme.light);
        document.documentElement.style.setProperty('--theme-dark', theme.dark);
        document.documentElement.style.setProperty('--theme-gradient', theme.gradient);
        document.documentElement.style.setProperty('--theme-font-title', theme.fontTitle);
        document.documentElement.style.setProperty('--theme-font-body', theme.fontBody);
    }

    // 8. RENDER PRODUCT MANAGER LIST (SIDEBAR)
    function renderProductManager() {
        productManagerList.innerHTML = '';
        products.forEach((prod, index) => {
            const card = document.createElement('div');
            card.className = `product-item-card ${prod.id === selectedProductId ? 'active' : ''} ${!prod.enabled ? 'disabled' : ''}`;
            card.style.opacity = prod.enabled ? '1' : '0.5';
            card.dataset.id = prod.id;

            card.innerHTML = `
                <input type="checkbox" class="product-toggle" ${prod.enabled ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px; accent-color: var(--pink-primary); margin-right: 4px;" title="Include in Catalog">
                <img src="${prod.img}" class="product-item-thumb" alt="${prod.name}">
                <div class="product-item-info">
                    <h4>${prod.name || 'Unnamed Product'}</h4>
                    <span>₹${prod.price || '0'}</span>
                </div>
                <div class="product-item-controls">
                    <button class="btn-icon move-up" title="Move Up" data-index="${index}">▲</button>
                    <button class="btn-icon move-down" title="Move Down" data-index="${index}">▼</button>
                </div>
            `;

            // Click to select
            card.addEventListener('click', (e) => {
                // Prevent selection if button or checkbox is clicked
                if (e.target.classList.contains('btn-icon') || e.target.classList.contains('product-toggle')) return;
                selectProduct(prod.id);
            });

            // Checkbox toggle controls
            const toggleCheckbox = card.querySelector('.product-toggle');
            toggleCheckbox.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            toggleCheckbox.addEventListener('change', (e) => {
                prod.enabled = e.target.checked;
                saveState();
                card.style.opacity = prod.enabled ? '1' : '0.5';
                if (!prod.enabled) {
                    card.classList.add('disabled');
                } else {
                    card.classList.remove('disabled');
                }
                renderPreview();
            });

            // Button controls
            card.querySelector('.move-up').addEventListener('click', (e) => {
                e.stopPropagation();
                moveProduct(index, -1);
            });
            card.querySelector('.move-down').addEventListener('click', (e) => {
                e.stopPropagation();
                moveProduct(index, 1);
            });

            productManagerList.appendChild(card);
        });
    }

    function selectProduct(id) {
        selectedProductId = id;
        
        // Highlight active card
        document.querySelectorAll('.product-item-card').forEach(card => {
            if (card.dataset.id === id) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function moveProduct(index, direction) {
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= products.length) return;

        // Swap products
        const temp = products[index];
        products[index] = products[targetIndex];
        products[targetIndex] = temp;

        saveState();
        renderProductManager();
        renderPreview();
        showToast("Products rearranged!");
    }

    // 9. DYNAMIC A4 PREVIEW ENGINE
    function getSparkleDecorationsHtml(isCover = false) {
        if (!layout.showSparkles) return '';
        if (isCover) {
            return `
                <div class="page-decoration cover-deco-1" style="position: absolute; top: 15%; left: 10%; color: var(--theme-primary); opacity: 0.15; transform: rotate(15deg); pointer-events: none;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div class="page-decoration cover-deco-2" style="position: absolute; top: 25%; right: 12%; color: var(--theme-secondary); opacity: 0.18; transform: scale(1.3) rotate(-20deg); pointer-events: none;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
                </div>
                <div class="page-decoration cover-deco-3" style="position: absolute; bottom: 30%; left: 15%; color: var(--theme-secondary); opacity: 0.12; transform: scale(0.9) rotate(45deg); pointer-events: none;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <div class="page-decoration cover-deco-4" style="position: absolute; bottom: 25%; right: 15%; color: var(--theme-primary); opacity: 0.16; transform: rotate(-10deg); pointer-events: none;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div class="page-decoration cover-deco-5" style="position: absolute; top: 50%; left: 8%; color: var(--theme-primary); opacity: 0.14; transform: scale(1.1) rotate(30deg); pointer-events: none;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
                </div>
                <div class="page-decoration cover-deco-6" style="position: absolute; top: 48%; right: 8%; color: var(--theme-secondary); opacity: 0.15; transform: scale(0.9) rotate(-15deg); pointer-events: none;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
            `;
        } else {
            return `
                <div class="page-decoration page-deco-tr" style="position: absolute; top: 12mm; right: 12mm; display: flex; gap: 4px; color: var(--theme-primary); opacity: 0.12; pointer-events: none;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="transform: rotate(15deg);"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="margin-top: -4px;"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
                </div>
                <div class="page-decoration page-deco-bl" style="position: absolute; bottom: 12mm; left: 12mm; display: flex; gap: 4px; color: var(--theme-secondary); opacity: 0.12; pointer-events: none;">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="margin-top: 4px;"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="transform: rotate(-15deg);"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
            `;
        }
    }

    function renderPreview() {
        catalogContainer.innerHTML = '';

        const enabledProducts = products.filter(p => p.enabled);
        const totalProducts = enabledProducts.length;

        if (totalProducts === 0) {
            catalogContainer.innerHTML = `
                <div class="catalog-page" style="justify-content: center; align-items: center; text-align: center;">
                    <h2>No Products Added</h2>
                    <p>Please check at least one product in the sidebar list to generate the catalog.</p>
                </div>
            `;
            return;
        }

        // Calculate pages pagination structure
        const itemsPerPage = layout.itemsPerPage;
        const totalProductPages = Math.ceil(totalProducts / itemsPerPage);
        
        // Calculate page index offsets:
        // Page 1 is Cover.
        // Page 2 is Table of Contents (if enabled).
        // Product pages start after cover + TOC.
        const tocOffset = layout.showTOC ? 1 : 0;
        const thankYouOffset = layout.showThankYou ? 1 : 0;
        const totalPages = 1 + tocOffset + totalProductPages + thankYouOffset;

        // Let's keep a map of category starting pages for TOC
        const categoryStartPages = {};
        enabledProducts.forEach((prod, index) => {
            const prodPageNum = Math.floor(index / itemsPerPage) + 1 + 1 + tocOffset; // +1 cover, +tocOffset
            if (!categoryStartPages[prod.category]) {
                categoryStartPages[prod.category] = prodPageNum;
            }
        });

        let currentPageNum = 1;
        const isLandscape = layout.orientation === 'landscape';

        // Prepare clickable coordinates
        const whatsappNumberClean = metadata.whatsapp ? metadata.whatsapp.replace(/[^0-9]/g, '') : "919023243011";
        const whatsappLink = `https://wa.me/${whatsappNumberClean}?text=${encodeURIComponent('Hi! I saw your catalog and want to order some products.')}`;
        const instaLink = `https://instagram.com/${(metadata.instagram || '@nvb_handmade').replace('@', '')}`;
        const webLink = metadata.website || "https://www.nvbhandmade.store/";

        // --- PAGE 1: COVER PAGE ---
        const coverPage = document.createElement('div');
        coverPage.className = 'catalog-page cover-page' + (isLandscape ? ' landscape-mode' : '');
        coverPage.innerHTML = `
            <div class="page-accent-top"></div>
            ${getSparkleDecorationsHtml(true)}
            <div class="cover-logo-frame">
                <img src="${metadata.logoImg}" alt="NVB Logo">
            </div>
            <div class="cover-title-container">
                <div class="cover-brand-tag">${metadata.title}</div>
                <h2 class="cover-title">${metadata.title}</h2>
                <div class="cover-subtitle">${metadata.subtitle}</div>
            </div>
            <div class="cover-divider"></div>
            <div class="cover-details">
                <div><strong>Website:</strong> <a href="${webLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${webLink.replace('https://', '').replace('www.', '')}</a></div>
                <div><strong>Instagram:</strong> <a href="${instaLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${metadata.instagram}</a></div>
                <div><strong>WhatsApp:</strong> <a href="${whatsappLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${metadata.whatsapp}</a></div>
                <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', {month: 'long', year: 'numeric'})}</div>
            </div>
            <div class="cover-footer-text">
                ${metadata.footerText}
            </div>
        `;
        catalogContainer.appendChild(coverPage);
        currentPageNum++;

        // --- PAGE 2: TABLE OF CONTENTS (Optional) ---
        if (layout.showTOC) {
            const tocPage = document.createElement('div');
            tocPage.className = 'catalog-page toc-page' + (isLandscape ? ' landscape-mode' : '');
            let tocItemsHtml = '';
            for (const [cat, pageNum] of Object.entries(categoryStartPages)) {
                tocItemsHtml += `
                    <div class="toc-item">
                        <span class="toc-category">${cat}</span>
                        <span class="toc-dots"></span>
                        <span class="toc-page-num">Page ${pageNum}</span>
                    </div>
                `;
            }
            tocPage.innerHTML = `
                <div class="page-accent-top"></div>
                ${getSparkleDecorationsHtml(false)}
                <div class="page-header">
                    <div class="header-brand">
                        <img src="${metadata.logoImg}" class="header-brand-img" alt="">
                        <span class="header-brand-name">${metadata.title}</span>
                    </div>
                    <span class="header-catalog-title">Table of Contents</span>
                </div>
                <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; margin-bottom: 20mm;">
                    <h2 class="toc-title">Catalog Contents</h2>
                    <div class="toc-list">
                        ${tocItemsHtml || '<div style="text-align:center; color:#999;">No categories found</div>'}
                    </div>
                </div>
                <div class="page-footer">
                    <div class="footer-contact">
                        <span>Web: <a href="${webLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${webLink.replace('https://', '').replace('www.', '')}</a></span>
                        <span>Insta: <a href="${instaLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${metadata.instagram}</a></span>
                    </div>
                    <span class="page-number">Page ${currentPageNum} of ${totalPages}</span>
                </div>
            `;
            catalogContainer.appendChild(tocPage);
            currentPageNum++;
        }

        // --- PAGES 3+: PRODUCTS GRID PAGES ---
        for (let pageIndex = 0; pageIndex < totalProductPages; pageIndex++) {
            const startProdIndex = pageIndex * itemsPerPage;
            const pageProducts = enabledProducts.slice(startProdIndex, startProdIndex + itemsPerPage);

            const prodPage = document.createElement('div');
            prodPage.className = 'catalog-page' + (isLandscape ? ' landscape-mode' : '');

            // Generate product cards HTML
            let productsGridHtml = '';
            pageProducts.forEach(prod => {
                const skuHtml = layout.showSKUs ? `<span class="product-sku-badge">${prod.sku}</span>` : '';
                const categoryHtml = `<span class="product-category-badge">${prod.category}</span>`;
                const priceHtml = layout.showPrices ? `<div class="product-price">₹${prod.price}</div>` : '';
                
                productsGridHtml += `
                    <div class="product-card">
                        <div class="product-img-container">
                            <img src="${prod.img}" alt="${prod.name}">
                            ${skuHtml}
                            ${categoryHtml}
                        </div>
                        <div class="product-body">
                            <h3 class="product-title">${prod.name}</h3>
                            <p class="product-desc">${prod.desc}</p>
                            ${priceHtml}
                        </div>
                    </div>
                `;
            });

            prodPage.innerHTML = `
                <div class="page-accent-top"></div>
                ${getSparkleDecorationsHtml(false)}
                <div class="page-header">
                    <div class="header-brand">
                        <img src="${metadata.logoImg}" class="header-brand-img" alt="">
                        <span class="header-brand-name">${metadata.title}</span>
                    </div>
                    <span class="header-catalog-title">Product Collection</span>
                </div>
                <div class="products-grid grid-layout-${itemsPerPage}">
                    ${productsGridHtml}
                </div>
                <div class="page-footer">
                    <div class="footer-contact">
                        <span>WhatsApp: <a href="${whatsappLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${metadata.whatsapp}</a></span>
                        <span>Insta: <a href="${instaLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${metadata.instagram}</a></span>
                        <span>Web: <a href="${webLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${webLink.replace('https://', '').replace('www.', '')}</a></span>
                    </div>
                    <span class="page-number">Page ${currentPageNum} of ${totalPages}</span>
                </div>
            `;

            catalogContainer.appendChild(prodPage);
            currentPageNum++;
        }

        // --- PAGE (LAST): THANK YOU / BACK COVER PAGE ---
        if (layout.showThankYou) {
            const thankYouPage = document.createElement('div');
            thankYouPage.className = 'catalog-page back-cover-page' + (isLandscape ? ' landscape-mode' : '');
            
            thankYouPage.innerHTML = `
                <div class="page-accent-top"></div>
                ${getSparkleDecorationsHtml(true)}
                
                <div class="back-cover-content">
                    <div class="back-cover-circle-deco">
                        <div class="inner-wool-ball">✦</div>
                    </div>
                    
                    <h2 class="thank-you-title">Made with Love</h2>
                    <p class="thank-you-msg">${metadata.backCoverMsg || 'Thank you for exploring our handmade creations!'}</p>
                    
                    <div class="back-cover-links">
                        <a href="${webLink}" target="_blank" class="contact-bubble website-bubble">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <span>${webLink.replace('https://', '').replace('www.', '')}</span>
                        </a>
                        
                        <a href="${instaLink}" target="_blank" class="contact-bubble insta-bubble">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span>${metadata.instagram}</span>
                        </a>

                        <a href="${whatsappLink}" target="_blank" class="contact-bubble whatsapp-bubble">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>WhatsApp Order</span>
                        </a>
                    </div>

                    <div class="back-cover-shipping-text">
                        ✨ Pan India Shipping | COD Available | 100% Handcrafted ✨
                    </div>
                </div>

                <div class="page-footer">
                    <div class="footer-contact">
                        <span>Website: <a href="${webLink}" target="_blank" style="color: var(--theme-primary); font-weight:600; text-decoration:underline;">${webLink.replace('https://', '').replace('www.', '')}</a></span>
                    </div>
                    <span class="page-number">Page ${currentPageNum} of ${totalPages}</span>
                </div>
            `;
            catalogContainer.appendChild(thankYouPage);
            currentPageNum++;
        }
    }

    // 10. SETUP LIVE EVENT LISTENERS FOR EDITOR CONTROLS
    
    // Metadata Changes
    function setupMetadataListeners() {
        const inputs = [
            { el: inputCatalogTitle, key: 'title' },
            { el: inputCatalogSubtitle, key: 'subtitle' },
            { el: inputCatalogWhatsapp, key: 'whatsapp' },
            { el: inputCatalogInstagram, key: 'instagram' },
            { el: inputCatalogWebsite, key: 'website' },
            { el: inputCatalogFooter, key: 'footerText' },
            { el: inputCatalogBackCover, key: 'backCoverMsg' }
        ];

        inputs.forEach(item => {
            item.el.addEventListener('input', () => {
                metadata[item.key] = item.el.value;
                saveState();
                renderPreview();
            });
        });
    }

    // Theme Picker
    document.querySelectorAll('.theme-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.theme-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            layout.theme = chip.dataset.theme;
            saveState();
            applyThemeVariables();
            renderPreview();
            showToast(`Theme changed to ${chip.textContent}!`);
        });
    });

    // Page Orientation Picker
    document.querySelectorAll('.orientation-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.orientation-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            layout.orientation = chip.dataset.orientation;
            saveState();
            applyPageOrientation();
            renderPreview();
            showToast(`Orientation set to ${layout.orientation}!`);
        });
    });

    // Layout (Items per page) Picker
    document.querySelectorAll('.layout-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.layout-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            layout.itemsPerPage = parseInt(option.dataset.layout);
            saveState();
            renderPreview();
            showToast(`Layout set to ${layout.itemsPerPage} products per page!`);
        });
    });

    // Toggles
    checkShowTOC.addEventListener('change', () => {
        layout.showTOC = checkShowTOC.checked;
        saveState();
        renderPreview();
    });

    checkShowThankYou.addEventListener('change', () => {
        layout.showThankYou = checkShowThankYou.checked;
        saveState();
        renderPreview();
    });

    checkShowSparkles.addEventListener('change', () => {
        layout.showSparkles = checkShowSparkles.checked;
        saveState();
        renderPreview();
    });

    checkShowPrices.addEventListener('change', () => {
        layout.showPrices = checkShowPrices.checked;
        saveState();
        renderPreview();
    });

    checkShowSKUs.addEventListener('change', () => {
        layout.showSKUs = checkShowSKUs.checked;
        saveState();
        renderPreview();
    });

    // Product Details Editor Listeners
    function setupProductEditorListeners() {
        const updateCurrentProduct = () => {
            const prod = products.find(p => p.id === selectedProductId);
            if (prod) {
                prod.name = editName.value;
                prod.category = editCategory.value;
                prod.price = editPrice.value;
                prod.sku = editSku.value;
                prod.desc = editDesc.value;
                prod.enabled = editEnabled.checked;
                
                saveState();
                
                // Update sidebar list items without full rebuild to keep focus/scroll
                const card = document.querySelector(`.product-item-card[data-id="${selectedProductId}"]`);
                if (card) {
                    card.querySelector('.product-item-info h4').textContent = prod.name || 'Unnamed Product';
                    card.querySelector('.product-item-info span').textContent = `₹${prod.price || '0'}`;
                    if (!prod.enabled) {
                        card.classList.add('disabled');
                        card.style.opacity = '0.5';
                    } else {
                        card.classList.remove('disabled');
                        card.style.opacity = '1';
                    }
                }
                
                renderPreview();
            }
        };

        editName.addEventListener('input', updateCurrentProduct);
        editCategory.addEventListener('input', updateCurrentProduct);
        editPrice.addEventListener('input', updateCurrentProduct);
        editSku.addEventListener('input', updateCurrentProduct);
        editDesc.addEventListener('input', updateCurrentProduct);
        editEnabled.addEventListener('change', updateCurrentProduct);
    }

    // 11. EXTRA FUNCTIONAL ACTIONS (ADD, RESET, PRINT)

    // Reset catalog data to default
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm("Are you sure you want to reset all modifications to default settings?")) {
            products = [...defaultProducts];
            metadata = {...defaultMetadata};
            layout = {...defaultLayout};
            selectedProductId = products[0].id;

            saveState();
            initControlValues();
            renderProductManager();
            selectProduct(selectedProductId);
            renderPreview();
            showToast("Reset to default product catalog!");
        }
    });

    // Add Product Modal trigger / simulation
    document.getElementById('addProductBtn').addEventListener('click', () => {
        const newId = 'p_new_' + Date.now();
        
        // Randomly pick an existing image just to demonstrate adding new items locally
        const randomProduct = defaultProducts[Math.floor(Math.random() * defaultProducts.length)];
        
        const newProduct = {
            id: newId,
            name: "New Handmade Product",
            category: "Accessories",
            price: "150",
            sku: "NVB-NEW",
            desc: "Custom handmade decorative item or cute keychain tailored just for you.",
            img: randomProduct.img,
            enabled: true
        };

        products.push(newProduct);
        selectedProductId = newId;

        saveState();
        renderProductManager();
        selectProduct(newId);
        renderPreview();
        
        // Scroll to the bottom of the list
        productManagerList.scrollTop = productManagerList.scrollHeight;
        
        showToast("New product card created! Customize details below.");
    });

    // Delete current product card
    document.getElementById('deleteProductBtn').addEventListener('click', () => {
        if (products.length <= 1) {
            alert("You must have at least one product in your list.");
            return;
        }

        if (confirm("Delete this product from your catalog?")) {
            const index = products.findIndex(p => p.id === selectedProductId);
            products.splice(index, 1);
            
            // Select another product
            selectedProductId = products[0].id;
            
            saveState();
            renderProductManager();
            selectProduct(selectedProductId);
            renderPreview();
            showToast("Product card deleted.");
        }
    });

    // 12. PRINT HELPERS & DIALOGS
    document.getElementById('printBtn').addEventListener('click', () => {
        // Show Print Instructions Modal first
        printModal.classList.add('active');
    });

    document.getElementById('closeModalBtn').addEventListener('click', () => {
        printModal.classList.remove('active');
    });

    document.getElementById('proceedPrintBtn').addEventListener('click', () => {
        printModal.classList.remove('active');
        // Trigger browser native print
        setTimeout(() => {
            window.print();
        }, 300);
    });

    // Close modal on background click
    printModal.addEventListener('click', (e) => {
        if (e.target === printModal) {
            printModal.classList.remove('active');
        }
    });

    // 13. EXECUTE INITIALIZATION
    initControlValues();
    setupMetadataListeners();
    setupProductEditorListeners();
    renderProductManager();
    if (selectedProductId) {
        selectProduct(selectedProductId);
    }
    renderPreview();
});
