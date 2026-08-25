/* eslint-disable @typescript-eslint/no-unused-vars */

// ===================================
// Navigation and Mobile Menu
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.top-bar-link, .main-nav-item, .nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    if (navMenu && navToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            if (!targetHref || !targetHref.startsWith('#') || targetHref.length === 1) {
                return;
            }

            e.preventDefault();
            const targetSection = document.querySelector(targetHref);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('nav-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// ===================================
// Scroll Reveal Animations
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Gallery Lightbox
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        if (lightbox && lightboxImg instanceof HTMLImageElement) {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            document.body.style.overflow = 'hidden';
        }
    });
});

if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    if (lightbox && lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// ===================================
// Testimonial Carousel
// ===================================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (!slides.length || !dots.length || !slides[index] || !dots[index]) {
        return;
    }

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    nextSlide();
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

// Auto-advance testimonials
setInterval(nextSlide, 5000);

// ===================================
// Booking Form Handling
// ===================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        if (!submitBtn || !(submitBtn instanceof HTMLElement)) {
            return;
        }
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Show success message
            showMessage('success', 'Thank you for your booking request! We will contact you within 24 hours.');
            
            // Reset form
            this.reset();
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('loading');
            
            // Scroll to top of booking section
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    });
}

// ===================================
// Package Selection from Cards
// ===================================
function openBookingForm(packageName) {
    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    
    // Set the package in the form
    setTimeout(() => {
        const packageSelect = document.getElementById('package');
        if (packageSelect) {
            packageSelect.value = packageName;
            
            // Add highlight effect
            packageSelect.style.borderColor = 'var(--primary-gold)';
            packageSelect.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
            
            setTimeout(() => {
                packageSelect.style.borderColor = '';
                packageSelect.style.boxShadow = '';
            }, 2000);
        }
    }, 1000);
}

// ===================================
// Utility Functions
// ===================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function showMessage(type, message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert after the form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.parentNode.insertBefore(messageDiv, bookingForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// ===================================
// Form Validation
// ===================================
function validateForm(formData) {
    const errors = [];
    
    // Required fields validation
    if (!formData.get('name') || formData.get('name').trim() === '') {
        errors.push('Name is required');
    }
    
    if (!formData.get('email') || formData.get('email').trim() === '') {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('package') || formData.get('package') === '') {
        errors.push('Please select a safari package');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===================================
// Lazy Loading for Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(revealOnScroll, 10));

// ===================================
// Analytics and Tracking (placeholder)
// ===================================
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    
    // Example: Track package clicks
    if (eventName === 'package_click') {
        // Send to your analytics service
        // gtag('event', 'package_click', properties);
    }
}

// Add tracking to package buttons
document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const packageName = this.closest('.package-card').querySelector('h3').textContent;
        trackEvent('package_click', {
            package_name: packageName,
            location: 'package_card'
        });
    });
});

// ===================================
// Accessibility Improvements
// ===================================
// Add keyboard navigation for package cards
document.querySelectorAll('.package-card').forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Safari package: ${card.querySelector('h3').textContent}`);
    
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const bookBtn = this.querySelector('.book-btn');
            if (bookBtn) {
                bookBtn.click();
            }
        }
    });
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// ===================================
// Page Load Optimizations
// ===================================
// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize on page load
window.addEventListener('load', function() {
    preloadImages();
    revealOnScroll();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// ===================================
// Mobile Touch Gestures
// ===================================
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (!testimonialCarousel) return;
    
    testimonialCarousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialCarousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });
}

function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - next slide
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - previous slide
        prevSlide();
    }
}

// Initialize swipe gestures
handleSwipe();

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🦁 Welcome to Man on Adventure Safari! 🌍', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%cExperience the wild heart of Africa with us!', 'font-size: 14px; color: #2d5016;');
