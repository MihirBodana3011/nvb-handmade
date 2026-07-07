// ===== NVB HANDMADE - INTERACTIVE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', () => {
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar shrink on scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== MOBILE NAV TOGGLE =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // ===== PRODUCT FILTER TABS =====
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('.product-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;

            productCards.forEach((card, index) => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s both`;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;

            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load

    // ===== SCROLL REVEAL ANIMATION =====
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.product-card, .category-card, .feature-card, .review-card, .contact-card, .section-header'
        );

        revealElements.forEach(el => {
            el.classList.add('reveal');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for grid items
                    const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                    const siblingIndex = Array.from(siblings).indexOf(entry.target);
                    const delay = siblingIndex * 80;

                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    initScrollReveal();

    // ===== SMOOTH SCROLL FOR NAV LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== ACTIVE NAV LINK HIGHLIGHT =====
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.style.color = 'var(--pink-600)';
                    link.style.background = 'var(--pink-50)';
                } else {
                    link.style.color = '';
                    link.style.background = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // ===== IMAGE LAZY LOADING WITH FADE =====
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';

        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });

    // ===== PARALLAX EFFECT ON HERO =====
    const heroImageContainer = document.querySelector('.hero-image');
    if (heroImageContainer) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (window.innerWidth > 768) {
                if (scrollY < 800) {
                    heroImageContainer.style.transform = `translateY(${scrollY * 0.04}px)`;
                }
            } else {
                heroImageContainer.style.transform = 'none';
            }
        });
    }

    // ===== 3D & 4D TILT AND FOIL EFFECT =====
    if (window.matchMedia('(hover: hover)').matches) {
        productCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const rotateY = ((x - xc) / xc) * 12; // max 12 deg
                const rotateX = -((y - yc) / yc) * 12;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

                // Track absolute coordinates and percentages
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
                card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            });
        });

        // Apply tilt to Category Cards
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const rotateY = ((x - xc) / xc) * 15; // max 15 deg for category cards
                const rotateX = -((y - yc) / yc) * 15;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

                card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            });
        });

        // Apply tilt to Feature Cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const rotateY = ((x - xc) / xc) * 10;
                const rotateX = -((y - yc) / yc) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

                card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            });
        });
    }

    // ===== DYNAMIC BACKGROUND DECORATIONS =====
    function initBackgroundDecorations() {
        const sections = document.querySelectorAll('section');

        const icons = {
            heart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="url(#decoGradGlob)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
            flower: '<svg width="24" height="24" viewBox="0 0 24 24" fill="url(#decoGradGlob)"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 .5 1.9 4 4 0 0 0-3.5 1.6A4 4 0 0 0 3.5 12a4 4 0 0 0 1.5 2.5A4 4 0 0 0 8.5 16 4 4 0 0 0 8 18a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-.5-1.9 4 4 0 0 0 3.5-1.6 4 4 0 0 0 1.5-2.5 4 4 0 0 0-1.5-2.5 4 4 0 0 0-3.5-1.6A4 4 0 0 0 16 6a4 4 0 0 0-4-4zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>',
            sparkle: '<svg width="20" height="20" viewBox="0 0 24 24" fill="url(#decoGradGlob)"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>',
            star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="url(#decoGradGlob)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
        };

        // Inject global gradient inside body once
        if (!document.getElementById('decoGradGlobSvg')) {
            const svgDef = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgDef.setAttribute('id', 'decoGradGlobSvg');
            svgDef.style.position = 'absolute';
            svgDef.style.width = '0';
            svgDef.style.height = '0';
            svgDef.setAttribute('aria-hidden', 'true');
            svgDef.innerHTML = `
                <defs>
                    <linearGradient id="decoGradGlob" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#ec4899" stop-opacity="0.32" />
                        <stop offset="100%" stop-color="#a855f7" stop-opacity="0.32" />
                    </linearGradient>
                </defs>
            `;
            document.body.appendChild(svgDef);
        }

        sections.forEach(section => {
            const position = window.getComputedStyle(section).position;
            if (position === 'static') {
                section.style.position = 'relative';
            }

            const counts = { heart: 20, flower: 20, sparkle: 15, star: 40 };

            Object.keys(counts).forEach(type => {
                const count = counts[type];
                for (let i = 0; i < count; i++) {
                    const wrapper = document.createElement('div');
                    wrapper.className = `glob-deco deco-${type}`;
                    wrapper.innerHTML = icons[type];

                    const top = Math.random() * 95;
                    const left = Math.random() * 95;

                    wrapper.style.position = 'absolute';
                    wrapper.style.top = `${top}%`;
                    wrapper.style.left = `${left}%`;
                    wrapper.style.pointerEvents = 'none';
                    wrapper.style.zIndex = '1';

                    const scale = 0.5 + Math.random() * 0.7;
                    const delay = Math.random() * -12;
                    const duration = 7 + Math.random() * 9;

                    const animName = Math.random() > 0.5 ? 'floatDeco1' : 'floatDeco2';
                    wrapper.style.animation = `${animName} ${duration}s ease-in-out ${delay}s infinite`;
                    wrapper.style.transform = `scale(${scale})`;

                    section.appendChild(wrapper);
                }
            });
        });
    }

    // ===== REVIEWS AUTO-SLIDER FOR MOBILE =====
    function initReviewsSlider() {
        const slider = document.querySelector('.reviews-slider');
        const cards = document.querySelectorAll('.review-card');
        if (!slider || cards.length === 0) return;

        let currentIndex = 0;
        let slideInterval;

        function showSlide(index) {
            if (window.innerWidth > 768) {
                slider.style.transform = 'none';
                return;
            }
            if (index >= cards.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = cards.length - 1;
            } else {
                currentIndex = index;
            }

            const offset = -currentIndex * 100;
            slider.style.transform = `translateX(${offset}%)`;
        }

        function startAutoSlide() {
            stopAutoSlide();
            if (window.innerWidth <= 768) {
                slideInterval = setInterval(() => {
                    showSlide(currentIndex + 1);
                }, 3500);
            }
        }

        function stopAutoSlide() {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        }

        // Start auto slide on mobile
        startAutoSlide();

        // Resize listener to adapt or reset
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                slider.style.transform = 'none';
                stopAutoSlide();
            } else {
                showSlide(currentIndex);
                startAutoSlide();
            }
        });

        // Touch swipe variables
        let startX = 0;
        let diffX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            stopAutoSlide();
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            const currentX = e.touches[0].clientX;
            diffX = startX - currentX;
        }, { passive: true });

        slider.addEventListener('touchend', () => {
            if (Math.abs(diffX) > 40) { // swipe threshold
                if (diffX > 0) {
                    showSlide(currentIndex + 1);
                } else {
                    showSlide(currentIndex - 1);
                }
            }
            startAutoSlide();
            diffX = 0;
        });
    }

    initBackgroundDecorations();
    initReviewsSlider();

    console.log('💕 NVB Handmade website loaded successfully!');
});
