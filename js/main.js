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
// Live Demo Dashboard Interactivity
// =================================

(function() {
    // Demo data configurations
    const demoData = {
        '7': {
            revenue: '$28.3K',
            orders: '342',
            aov: '$82.75',
            changeRevenue: '↑ 5.2%',
            changeOrders: '↑ 3.1%',
            changeAov: '↑ 1.8%',
            bars: [30, 45, 60, 55, 70, 85, 75]
        },
        '30': {
            revenue: '$124.5K',
            orders: '1,429',
            aov: '$87.12',
            changeRevenue: '↑ 12.3%',
            changeOrders: '↑ 8.1%',
            changeAov: '↓ 2.4%',
            bars: [45, 65, 55, 80, 70, 90, 85]
        },
        '90': {
            revenue: '$385.2K',
            orders: '4,521',
            aov: '$85.20',
            changeRevenue: '↑ 18.7%',
            changeOrders: '↑ 15.3%',
            changeAov: '↑ 4.2%',
            bars: [60, 55, 70, 75, 80, 85, 90]
        },
        '365': {
            revenue: '$1.24M',
            orders: '15,890',
            aov: '$78.04',
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

    function updateDashboard() {
        const period = periodSelect.value;
        const region = regionSelect.value;
        const category = categorySelect.value;
        
        const baseData = demoData[period];
        const regionMult = regionMultipliers[region];
        const categoryMult = categoryMultipliers[category];
        
        // Calculate adjusted values
        const adjustedRevenue = calculateValue(baseData.revenue, regionMult * categoryMult);
        const adjustedOrders = calculateOrders(baseData.orders, regionMult * categoryMult);
        const adjustedAov = calculateAOV(baseData.aov, regionMult, categoryMult);
        
        // Update KPIs with animation
        animateValue(revenueEl, adjustedRevenue);
        animateValue(ordersEl, adjustedOrders);
        animateValue(aovEl, adjustedAov);
        
        // Update change indicators
        updateChangeIndicator(revenueEl, baseData.changeRevenue);
        updateChangeIndicator(ordersEl, baseData.changeOrders);
        updateChangeIndicator(aovEl, baseData.changeAov);
        
        // Update chart bars
        updateChart(baseData.bars, regionMult * categoryMult);
    }

    function calculateValue(valueStr, multiplier) {
        const num = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
        const adjusted = num * multiplier;
        
        if (valueStr.includes('M')) {
            return '$' + (adjusted / 1000000).toFixed(2) + 'M';
        } else if (valueStr.includes('K')) {
            return '$' + (adjusted / 1000).toFixed(1) + 'K';
        }
        return '$' + adjusted.toFixed(0);
    }

    function calculateOrders(ordersStr, multiplier) {
        const num = parseInt(ordersStr.replace(/,/g, ''));
        return Math.round(num * multiplier).toLocaleString();
    }

    function calculateAOV(aovStr, regionMult, categoryMult) {
        const num = parseFloat(aovStr.replace(/[^0-9.]/g, ''));
        // AOV doesn't change much with filters, slight variation
        const adjusted = num * (0.9 + Math.random() * 0.2);
        return '$' + adjusted.toFixed(2);
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
        changeEl.textContent = changeValue;
        changeEl.className = 'kpi-change ' + (changeValue.includes('↑') ? 'positive' : 'negative');
    }

    function updateChart(baseBars, multiplier) {
        const bars = chartContainer.querySelectorAll('.chart-bar');
        const values = ['$23K', '$34K', '$45K', '$52K', '$61K', '$78K', '$85K', '$92K', '$108K', '$124K'];
        
        bars.forEach((bar, index) => {
            const height = Math.min(100, Math.max(15, baseBars[index % baseBars.length] * (0.7 + Math.random() * 0.6)));
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
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
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
// Mobile Menu Toggle (Optional)
// =================================

// Add hamburger menu for mobile if needed
function createMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--primary);
        cursor: pointer;
    `;
    
    // Add hamburger to nav
    navContainer.appendChild(hamburger);
    
    // Toggle menu on mobile
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
    });
    
    // Show hamburger on mobile
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            navLinks.classList.remove('mobile-active');
        }
    });
}

// Initialize mobile menu
createMobileMenu();

// =================================
// Performance: Lazy Loading Images
// =================================

// Add lazy loading for images if you add them later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =================================
// Track Button Clicks (Optional Analytics)
// =================================

function trackEvent(category, action, label) {
    // You can integrate Google Analytics or other analytics here
    console.log('Event:', category, action, label);
    
    // Example for Google Analytics:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('CTA', 'Click', this.textContent);
    });
});

// Track project link clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('Project', 'Click', this.textContent);
    });
});

// =================================
// Console Easter Egg
// =================================

console.log('%c👋 Halo Developer!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cTertarik dengan kode di balik website ini?', 'font-size: 14px; color: #64748b;');
console.log('%cHubungi saya untuk diskusi collaboration! 🚀', 'font-size: 14px; color: #10b981;');

// =================================
// Page Load Performance
// =================================

window.addEventListener('load', function() {
    // Hide loading spinner if you have one
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Log page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log('Page loaded in ' + loadTime + 'ms');
});

// =================================
// Prevent Form Resubmission
// =================================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// =================================
// Add Active State to Navigation
// =================================

function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
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
