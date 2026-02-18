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
// ROI Calculator
// =================================

document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const hours = parseFloat(document.getElementById('hours').value);
    const salary = parseFloat(document.getElementById('salary').value);
    
    // Calculate: (hours per week * 52 weeks * salary) * 0.9 (90% automation)
    const yearlySavings = (hours * 52 * salary * 0.9);
    
    const resultDiv = document.getElementById('calcResult');
    const resultAmount = document.getElementById('resultAmount');
    
    // Format currency for Indonesian Rupiah
    resultAmount.textContent = 'Rp ' + yearlySavings.toLocaleString('id-ID');
    resultDiv.classList.add('show');
    
    // Scroll to result smoothly
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

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
