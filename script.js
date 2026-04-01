/* =============================================
   CHRONOS ELITE — Main JavaScript
   ============================================= */

// -----------------------------------------------
// PRODUCT DATABASE
// -----------------------------------------------
const PRODUCTS = {
    "chronos-no-1": {
        name: "Chronos No. 1",
        series: "Heritage Collection",
        price: "$2,400.00",
        description: "The Chronos No. 1 is the cornerstone of our collection — a timepiece that embodies the founding principles of precision and elegance. Its classic gold casing and hand-stitched black leather strap make it a timeless statement for any occasion.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzWDJwmS-qvXK1VgqiqmP7qcrGLxXb0fPkH3sLncR40eVHPMvrXL5eb-sp7jppufDGQq0HK0aSgJ5DsFPQdf1pDb0FZ5kNudFFklL-RfLvEj4hHfk6XqZOVYg683w1EqoLdSEvpcK04-mbVTi90g9tdS7ttlgNE70M4Saf61GrN6FjNQDovZyucQxItQr-b4IfDsEILhXXEmhDM5-PB7dYKCCSb0S1WZFacSJ5KEjMj1ui4UQeYB6TUVy-dZf2_i2rczNPt0Un",
        specs: {
            "Movement": "Automatic Caliber CE-01",
            "Case Material": "18K Yellow Gold",
            "Case Diameter": "40mm",
            "Water Resistance": "50 meters",
            "Crystal": "Sapphire with AR coating",
            "Power Reserve": "48 hours",
            "Strap": "Hand-stitched Italian calfskin",
            "Dial": "Ivory white with gilt indices"
        }
    },
    "ocean-master": {
        name: "Ocean Master",
        series: "Expedition Collection",
        price: "$3,150.00",
        description: "Engineered for the depths, the Ocean Master combines professional diving capability with refined aesthetics. Its luminous hands and markers ensure readability in the darkest underwater environments, while the unidirectional bezel provides critical timing during dives.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkof6FwKyx_3CG4yvC0FLm4GBq0rfTb5UgOxNTYEiPL4WxUqcxYwjHcoh6cqytydWb6oCO9UsfSnGby5rp0DY9jKnUUPB_HLjrmQfN7K6YGEyc5mBo0DAqsZKJRtFzXkjamxZZyAGqmaDSHgL_aQ5_3yIL6KRp_AXzbq4_c3QQDJvVT4Uro-WImLio1jmEhgVNbGPFiugUgsjlc3JFzrDbjHH9qv5CFpCPSu90cbD6ncwgMoShL6fLyPtJ6f-QdcrkwAO1FXoz",
        specs: {
            "Movement": "Automatic Caliber CE-03 Dive",
            "Case Material": "316L Stainless Steel",
            "Case Diameter": "42mm",
            "Water Resistance": "300 meters",
            "Crystal": "Sapphire, double AR coating",
            "Power Reserve": "60 hours",
            "Bezel": "Unidirectional ceramic",
            "Luminescence": "Super-LumiNova BGW9"
        }
    },
    "titanium-air": {
        name: "Titanium Air",
        series: "Modernist Collection",
        price: "$1,850.00",
        description: "Featherlight yet indestructible, the Titanium Air redefines what a modern dress watch can be. Crafted from Grade 5 titanium with a brushed mesh bracelet, it sits almost weightlessly on the wrist while delivering chronometric precision.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfl3P_Yn0VCMR67pDo3Q46I4tO0W-8riP8Wf7qNf9n5l5to21KIaw3xCXWznVOeAcycEZoMea_MSbXN-0V14SAWCFiqKsUF8qZtIjDaTP7gflR5rBV1OMlScajXOHwQmupYUNw1jP7qes2B6ALBCLDPn5uZzS0o7UtfqZPm19tEWDWRnIBVPuUw2I3ucuwWie3kSBiK95VRFxhQ2g5mCupynE_ceCaQdfgfB4Lzu0jVDz3HS8pVZQvL1piuK06vTnCTiDddZwj",
        specs: {
            "Movement": "Quartz Caliber CE-Q1",
            "Case Material": "Grade 5 Titanium",
            "Case Diameter": "38mm",
            "Water Resistance": "100 meters",
            "Crystal": "Flat sapphire",
            "Thickness": "6.8mm",
            "Weight": "52 grams",
            "Bracelet": "Titanium mesh, butterfly clasp"
        }
    },
    "elysian-rose": {
        name: "Elysian Rose",
        series: "Haute Joaillerie",
        price: "$4,200.00",
        description: "The Elysian Rose is an ode to feminine elegance. Hand-set diamond accents adorn the rose gold bezel, while the mother-of-pearl dial catches and refracts light with every movement. A luxurious satin strap completes this wearable work of art.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU9TxIoFkcjfzO8rLVibKT8NL3lUgmG6LCOvQ0EtLxP-ghE2imjyyskSHKVfq7URGMSgyTI2tuOntWovRChcsMoOalFFxNApf_tntgKezGfY7dnf57UpqFajhXGL8G6N_eR9hsEnIBv77HT6wa0vRHTcOBVKM4nh_NpDCIXVXq0biGt4Q_A-6D0OyX2jHcTF0d6sRZCbi9C5HTYYeQ_uyyMX-SYynGMREeLSzMipF0JnSlWZ8Q6Tpxv6AhzXjKk5NlCi3C2o7i",
        specs: {
            "Movement": "Automatic Caliber CE-02",
            "Case Material": "18K Rose Gold",
            "Case Diameter": "34mm",
            "Water Resistance": "30 meters",
            "Crystal": "Domed sapphire",
            "Diamonds": "48 brilliant-cut (0.52ct)",
            "Dial": "White mother-of-pearl",
            "Strap": "Champagne satin, pin buckle"
        }
    },
    "kobold-himalaya": {
        name: "Kobold Himalaya",
        series: "Expedition Collection",
        price: "$6,800.00",
        description: "Designed for the most rigorous peaks, where every second matters. The Kobold Himalaya is built with an antimagnetic inner case and a helium release valve, tested at extreme altitudes. Its oversized crown can be operated with gloves.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxinGOPHYQoGTdJMJeuirbl1cztIVcxTZtUv0tuksrLeiZnK_ChMoog6JtxuSyGcTFn_8IxKmdyOWMFUl3cGOzdxUL41mpHcUyitjBcD3wqF1MIu1LClMcNE9j9WLm3jHH0PvV8hC3wS1wmazlTiBCA8dX1QygjOJacGevLDNNuhMeryDNjy2dsXrXASUZygzh6PJFXU37dVdS6LVxW1TEtn-uYBC_aTXbtjtZnESJgI-s9D_WnY6I6QXbyvaSwFgNpFsz2-Ca",
        specs: {
            "Movement": "Automatic Caliber CE-05 Explorer",
            "Case Material": "Titanium with DLC coating",
            "Case Diameter": "44mm",
            "Water Resistance": "200 meters",
            "Crystal": "Sapphire, anti-reflective",
            "Power Reserve": "72 hours",
            "Features": "Antimagnetic, helium valve",
            "Strap": "Vulcanized rubber, deployant"
        }
    },
    "kobold-expedition": {
        name: "Kobold Expedition",
        series: "Expedition Collection",
        price: "$5,950.00",
        description: "Built to withstand the unknown, merging durability with class. The Expedition features a bi-directional compass bezel and a shock-resistant movement. Its military-grade construction is paired with an olive NATO strap for field readiness.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqiSFBla9qu7R0scHJqWOfOhCmB6qXSaLqxLBtsgEpMEUWb1hCtw6aNzca07-QK2H4yUxGUCYbYjoTEpI2-uIHz7hv1-7Blj4g0hahaEdLBJLt77gLhf7ZhF3Nzujm8VlhWC3GpC9Iz242cPjuIXfM_St0wc5mE97KU3ZMOiJwUQ5r32sAnhJAIt3DgH1K9QzlVbm3BvFQIClQb-1GTFBpFGBXLGKaocuhmrpqpnyBYUYZRvFxbR9Qieahkxg1lp9zuL1pb8uR",
        specs: {
            "Movement": "Automatic Caliber CE-04 Field",
            "Case Material": "Hardened 316L Steel",
            "Case Diameter": "42mm",
            "Water Resistance": "150 meters",
            "Crystal": "Sapphire with AR coating",
            "Power Reserve": "56 hours",
            "Bezel": "Bi-directional compass",
            "Strap": "Mil-spec NATO, olive drab"
        }
    },
    "grand-sovereign-xvii": {
        name: "Grand Sovereign XVII",
        series: "Heritage Series",
        price: "$24,500",
        description: "The pinnacle of the Heritage collection, the Grand Sovereign XVII is a hand-assembled masterpiece. Its 18k rose gold case houses a grand complication movement with a tourbillon, perpetual calendar, and minute repeater — a true collector's grail.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWBTaa1lAeGVSatFCt_JfbwPZQJRFgF-zEzUjpV_M2wEfyNzKrY1IH2ccq2EUjRHWQqEqZm74TEe3d3wSYpxtMv8BytWvW5C09B9z2Rgd8VXRCMaKwXGPtxDC2lY23_hbyPE3J7a2DYxYn1a9iexmNpl2ZHr6vAnA6zLr-tw8CPU6SDhai975UD8n78S8h8sfF64I37UrrrE8QyyV5H0ADGcAs4RcN0gdiLYR8E0gePo7PdKtUS_jQ1wlcY4DZAKNJ1Viiul4k",
        specs: {
            "Movement": "Hand-wound Caliber CE-GC",
            "Case Material": "18K Rose Gold",
            "Case Diameter": "43mm",
            "Water Resistance": "30 meters",
            "Crystal": "Box sapphire",
            "Power Reserve": "72 hours",
            "Complications": "Tourbillon, perpetual calendar",
            "Dial": "Genuine obsidian, hand-guilloché"
        }
    },
    "linear-steel-v2": {
        name: "Linear Steel v2",
        series: "Modernist Collection",
        price: "$8,200",
        description: "Precision-engineered for the urban landscape, the Linear Steel v2 distills watchmaking to its purest form. A brushed titanium monocoque case, anti-fingerprint coating, and a sunburst navy dial create a minimalist icon.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHLh4THDcvuDyv9OT3dwTkVlb5Yk7y3qqpoZCnQfBaHvF0gnn_Sw7zjJCtGTauKUxRrac5nb2CmIsxGPTeoLbbG5sHIsVl1wz_LN6spCmGvoYMvKTMIW4xmIkHVYcL7WBYBFcIzFF1UjhOeIHaqw-9TgqJ4_knuMB1TJ7KlA-bG7enEV0TKYLX66L75ht5lrGnnv4_Gi22Wtq-sXzw-VAxpHs9ehyLk4ekBNpCAAvZbv4WnfZhfQuMmE1TIzCm9ncYcggS3bv8",
        specs: {
            "Movement": "Automatic Caliber CE-M2",
            "Case Material": "Brushed Grade 2 Titanium",
            "Case Diameter": "39mm",
            "Water Resistance": "100 meters",
            "Crystal": "Flat sapphire, AR both sides",
            "Thickness": "8.2mm",
            "Dial": "Navy blue sunburst",
            "Bracelet": "Integrated titanium, quick-release"
        }
    },
    "terra-incognita": {
        name: "Terra Incognita",
        series: "Expedition Collection",
        price: "$12,900",
        description: "For the explorer who charts unknown territories. The Terra Incognita features a dual time zone, a digital compass, and a barometric altimeter — all housed in a rugged case tested to survive drops, extreme temperatures, and magnetic fields.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnzXR93zRA3aaKFHE5Zyf7603JDMeyKrSBITZpj81ctmO7q9hia696AVd_1HjVYklOdDS9wrVm1cUHH4LM1GGMepZkjvu_cXtZsjAHZjp0L4tV81WESozPmXUnT6hoFRXZPFrLq6UkeWRTe14MNlQ5uzsLL8i-oQKV4x5BqtHxpLJZgoT53YmahG8eZjq2e9Btcn1L0AZMl9XsjSxgmYfPmEWb97Ry4L-UiZSNaWdb-o-W0pSLbqmyBw7BPld0mJF3uvq80PMD",
        specs: {
            "Movement": "Hybrid Caliber CE-HB1",
            "Case Material": "Carbon composite / Titanium",
            "Case Diameter": "46mm",
            "Water Resistance": "200 meters",
            "Crystal": "Sapphire, triple AR",
            "Power Reserve": "Automatic + solar backup",
            "Functions": "Dual time, compass, altimeter",
            "Strap": "Hand-sewn leather, deployment"
        }
    },
    "chronicle-gmt": {
        name: "Chronicle GMT",
        series: "Heritage Collection",
        price: "$15,400",
        description: "The Chronicle GMT is built for the global traveler. Its independently adjustable GMT hand can be set to a second timezone without stopping the watch, while the 24-hour ceramic bezel allows quick reference between day and night at home.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClPkrDYhbMRb17rwiJU16_8IyqZI_riMlzwOI5g6YCtlAm4DZ9Yiuv-ORwqAtFxCvyRj5sEIb6NgFL92K79ZTifLUsF2qN-CeL_3fAivbaCZjfw9IEmWqiDj6HE33DlDowT2Ss689DAHeEDdKTiyLj5n2VtgWjxP8jFY0sScQVrRczW1dP00Hw9V8-S1QfbXl-s2MBE1LkCviEMGZH9eH9NRPbW_Vg7ZFZhZqUclKTkh86JiBqz32sTUoMSv2vNWbHukBzLtbd",
        specs: {
            "Movement": "Automatic Caliber CE-GMT",
            "Case Material": "904L Stainless Steel",
            "Case Diameter": "41mm",
            "Water Resistance": "100 meters",
            "Crystal": "Cyclops sapphire",
            "Power Reserve": "65 hours",
            "Bezel": "24hr ceramic, bi-color",
            "Dial": "Deep blue sunburst"
        }
    },
    "void-core-skeleton": {
        name: "Void Core Skeleton",
        series: "Modernist Collection",
        price: "$31,000",
        description: "A watch that reveals all and hides nothing. The Void Core Skeleton is a feat of engineering transparency — its movement is visible from every angle through a fully skeletonized dial and sapphire caseback. Matte black ceramic finish adds a modern edge.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNOkdyRJ0Mia0xjxCxQoJIuwXd06UwvvYRpGiB3ztNh7hZodmevHjUUg8YdCN607bjKHWc1ZNBmQ_3NDk_b8rBGv22Z_vRs5TNU_S2DuZ6bWPQO4nW4LJElzE-OE9t2NDkU-FoFCSZhQ6y7W1Ttm8rd2m1alPBX1GZEhsagj3AX0HvCbmNLhLad5ILi2rvu4SjWWGQFwkHQusyQOYVJvEFU_bRLtgxKj0XwxjRoK7hQDKMb-iDQDjyocNdI-EEQBSi1jQiT4J6",
        specs: {
            "Movement": "Hand-wound Caliber CE-SK",
            "Case Material": "Matte black ceramic (ZrO₂)",
            "Case Diameter": "42mm",
            "Water Resistance": "50 meters",
            "Crystal": "Sapphire front + caseback",
            "Power Reserve": "80 hours",
            "Dial": "Fully skeletonized",
            "Limited": "Edition of 88 pieces"
        }
    }
};

// -----------------------------------------------
// MODAL FUNCTIONS
// -----------------------------------------------
function openProductModal(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;

    const overlay = document.getElementById('product-modal-overlay');
    if (!overlay) return;

    // Populate modal content
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.name;
    document.getElementById('modal-series').textContent = product.series;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-price').textContent = product.price;
    document.getElementById('modal-desc').textContent = product.description;

    // Build specs
    const specsContainer = document.getElementById('modal-specs-list');
    specsContainer.innerHTML = '';
    for (const [label, value] of Object.entries(product.specs)) {
        const row = document.createElement('div');
        row.className = 'spec-row';
        row.innerHTML = `<span class="spec-label">${label}</span><span class="spec-value">${value}</span>`;
        specsContainer.appendChild(row);
    }

    // Show modal
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeProductModal() {
    const overlay = document.getElementById('product-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

// -----------------------------------------------
// MAIN DOM READY
// -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------
    // 1. Page Loader
    // -----------------------------------------------
    const loader = document.querySelector('.page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => loader.classList.add('loaded'), 400);
        });
        setTimeout(() => loader.classList.add('loaded'), 2000);
    }

    // -----------------------------------------------
    // 2. Scroll-Triggered Animations
    // -----------------------------------------------
    const animatedElements = document.querySelectorAll('[data-animate]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay;
                    if (delay) entry.target.style.animationDelay = delay + 'ms';
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
        animatedElements.forEach(el => observer.observe(el));
    } else {
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    // -----------------------------------------------
    // 3. Mobile Navigation
    // -----------------------------------------------
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('mobile-close-btn');

    function openMobileMenu() {
        if (mobileMenu) mobileMenu.classList.add('open');
        if (mobileOverlay) mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    // -----------------------------------------------
    // 4. Navbar Scroll Effect
    // -----------------------------------------------
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 80) navbar.classList.add('nav-scrolled');
            else navbar.classList.remove('nav-scrolled');
        }, { passive: true });
    }

    // -----------------------------------------------
    // 5. Smooth Scroll for Anchor Links
    // -----------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMobileMenu();
            }
        });
    });

    // -----------------------------------------------
    // 6. Parallax on hero images
    // -----------------------------------------------
    const heroImg = document.querySelector('.hero-parallax');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            heroImg.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        }, { passive: true });
    }

    // -----------------------------------------------
    // 7. Product Modal — Click Handlers
    // -----------------------------------------------
    document.querySelectorAll('[data-product]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openProductModal(card.dataset.product);
        });
    });

    // Close modal
    const modalOverlay = document.getElementById('product-modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeProductModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });

});
