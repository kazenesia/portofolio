// =================================
// Navbar Scroll Effect
// =================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =================================
// Live Demo Dashboard Interactivity - FIXED
// =================================

(function() {
    // Demo data configurations
    const demoData = {
        '7': {
            revenue: 28300,  // Changed from string to number (in dollars)
            orders: 342,
            aov: 82.75,
            changeRevenue: '↑ 5.2%',
            changeOrders: '↑ 3.1%',
            changeAov: '↑ 1.8%',
            bars: [30, 45, 60, 55, 70, 85, 75]
        },
        '30': {
            revenue: 124500,
            orders: 1429,
            aov: 87.12,
            changeRevenue: '↑ 12.3%',
            changeOrders: '↑ 8.1%',
            changeAov: '↓ 2.4%',
            bars: [45, 65, 55, 80, 70, 90, 85]
        },
        '90': {
            revenue: 385200,
            orders: 4521,
            aov: 85.20,
            changeRevenue: '↑ 18.7%',
            changeOrders: '↑ 15.3%',
            changeAov: '↑ 4.2%',
            bars: [60, 55, 70, 75, 80, 85, 90]
        },
        '365': {
            revenue: 1240000,
            orders: 15890,
            aov: 78.04,
            changeRevenue: '↑ 32.1%',
            changeOrders: '↑ 28.9%',
            changeAov: '↑ 6.7%',
            bars: [40, 50, 60, 70, 80, 90, 100]
        }
    };

    const regionMultipliers = {
        'all': 1,
        'north': 0.45,
        'europe': 0.30,
        'asia': 0.25
    };

    const categoryMultipliers = {
        'all': 1,
        'electronics': 0.40,
        'clothing': 0.35,
        'home': 0.25
    };

    // Get elements
    const periodSelect = document.getElementById('demoPeriod');
    const regionSelect = document.getElementById('demoRegion');
    const categorySelect = document.getElementById('demoCategory');
    const revenueEl = document.getElementById('demoRevenue');
    const ordersEl = document.getElementById('demoOrders');
    const aovEl = document.getElementById('demoAov');
    const chartContainer = document.getElementById('demoChart');

    // Format currency properly
    function formatCurrency(value) {
        if (value >= 1000000) {
            return '$' + (value / 1000000).toFixed(2) + 'M';
        } else if (value >= 1000) {
            return '$' + (value / 1000).toFixed(1) + 'K';
        }
        return '$' + value.toFixed(0);
    }

    function updateDashboard() {
        const period = periodSelect.value;
        const region = regionSelect.value;
        const category = categorySelect.value;
        
        const baseData = demoData[period];
        const regionMult = regionMultipliers[region];
        const categoryMult = categoryMultipliers[category];
        const totalMultiplier = regionMult * categoryMult;
        
        // Calculate adjusted values - FIXED: Using proper number calculation
        const adjustedRevenue = baseData.revenue * totalMultiplier;
        const adjustedOrders = Math.round(baseData.orders * totalMultiplier);
        const adjustedAov = adjustedRevenue / adjustedOrders;
        
        // Format values
        const formattedRevenue = formatCurrency(adjustedRevenue);
        const formattedOrders = adjustedOrders.toLocaleString();
        const formattedAov = '$' + adjustedAov.toFixed(2);
        
        // Update KPIs with animation
        animateValue(revenueEl, formattedRevenue);
        animateValue(ordersEl, formattedOrders);
        animateValue(aovEl, formattedAov);
        
        // Update change indicators
        updateChangeIndicator(revenueEl, baseData.changeRevenue);
        updateChangeIndicator(ordersEl, baseData.changeOrders);
        updateChangeIndicator(aovEl, baseData.changeAov);
        
        // Update chart bars
        updateChart(baseData.bars, totalMultiplier);
    }

    function animateValue(element, newValue) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150);
    }

    function updateChangeIndicator(kpiElement, changeValue) {
        const changeEl = kpiElement.nextElementSibling;
        if (changeEl && changeEl.classList.contains('kpi-change')) {
            changeEl.textContent = changeValue;
            changeEl.className = 'kpi-change ' + (changeValue.includes('↑') ? 'positive' : 'negative');
        }
    }

    function updateChart(baseBars, multiplier) {
        const bars = chartContainer.querySelectorAll('.chart-bar');
        const values = ['$23K', '$34K', '$45K', '$52K', '$61K', '$78K', '$85K', '$92K', '$108K', '$124K'];
        
        bars.forEach((bar, index) => {
            const adjustedHeight = baseBars[index % baseBars.length] * multiplier;
            const height = Math.min(100, Math.max(15, adjustedHeight));
            bar.style.height = height + '%';
            
            // Update tooltip value
            const valueIndex = Math.floor((height / 100) * (values.length - 1));
            bar.setAttribute('data-value', values[valueIndex]);
        });
    }

    // Event listeners
    if (periodSelect) {
        periodSelect.addEventListener('change', updateDashboard);
    }
    if (regionSelect) {
        regionSelect.addEventListener('change', updateDashboard);
    }
    if (categorySelect) {
        categorySelect.addEventListener('change', updateDashboard);
    }

    // Initial animation
    setTimeout(() => {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleY(1)';
            }, index * 100);
        });
    }, 500);
})();

// =================================
// FAQ Accordion
// =================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// =================================
// Smooth Scroll for Anchor Links
// =================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just '#' or empty
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =================================
// Scroll Animation Observer
// =================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// =================================
// Form Validation Helper
// =================================

// Add input validation for calculator
const numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Prevent negative values
        if (parseFloat(this.value) < 0) {
            this.value = '';
        }
    });
});

// =================================
// Mobile Menu Toggle - IMPROVED
// =================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('navOverlay');
    
    if (!hamburger || !navLinks || !overlay) return;
    
    function toggleMenu() {
        const isOpen = navLinks.classList.contains('active');
        
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                closeMenu();
            }
        });
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', initMobileMenu);

// =================================
// Add Active State to Navigation
// =================================

function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a:not(.cta-nav)');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

setActiveNavLink();

// =================================
// Page Load Performance
// =================================

window.addEventListener('load', function() {
    console.log('%c👋 Portfolio Loaded!', 'font-size: 16px; color: #2563eb; font-weight: bold;');
    console.log('%cBuilt with care and attention to detail ⚡', 'font-size: 12px; color: #64748b;');
});
