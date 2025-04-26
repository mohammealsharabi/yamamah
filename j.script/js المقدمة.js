  // إنشاء النجوم في الخلفية
  function createStars() {
    const starsContainer = document.querySelector('.particles-container');
    if (!starsContainer) return;
    
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'particle';
        
        // تعيين خصائص عشوائية
        const size = Math.random() * 2 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.8 + 0.2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        star.style.setProperty('--opacity', opacity);
        
        starsContainer.appendChild(star);
    }
}

// تأثير المؤشر المخصص
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const buttons = document.querySelectorAll('.btn, .form-submit, .service-card, .book-online, a, .slideshow-arrow, .slideshow-dot');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        if (!cursor.classList.contains('active')) {
            cursor.classList.add('active');
        }
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        button.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
}

// تحديث مؤشر التمرير
function updateScrollProgress() {
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgressBar.style.width = `${progress}%`;
}

// تحريك العناصر عند التمرير
function animateOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const cards = document.querySelectorAll('.service-card, .book-online');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
    
    cards.forEach((card, index) => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (cardTop < windowHeight - revealPoint) {
            setTimeout(() => {
                card.classList.add('animated');
            }, index * 100);
        }
    });
}

// Image slideshow
const images = [
    'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1920&q=80'
];

let currentIndex = 0; 
const slideshowImages = document.querySelectorAll('.image-slideshow img');
const dots = document.querySelectorAll('.slideshow-dot');
const prevArrow = document.querySelector('.slideshow-arrow.prev');
const nextArrow = document.querySelector('.slideshow-arrow.next');

function updateSlideshow(newIndex) {
    // Remove active class from current image and dot
    slideshowImages[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    // Update index
    currentIndex = newIndex;
    
    // Add active class to new image and dot
    slideshowImages[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % images.length;
    updateSlideshow(newIndex);
}

function prevSlide() {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlideshow(newIndex);
}

// Back to top button
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Contact form submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        // For now, just show an alert
        alert(`شكراً ${name} على تواصلك معنا! سنرد عليك قريباً.`);
        
        // Reset form
        contactForm.reset();
    });
}

// WhatsApp popup functionality
function initWhatsAppPopup() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappPopupClose = document.querySelector('.whatsapp-popup-close');

    whatsappButton.addEventListener('click', (e) => {
        e.preventDefault();
        whatsappPopup.classList.add('active');
    });

    whatsappPopupClose.addEventListener('click', () => {
        whatsappPopup.classList.remove('active');
    });

    // Close popup when clicking outside
    whatsappPopup.addEventListener('click', (e) => {
        if (e.target === whatsappPopup) {
            whatsappPopup.classList.remove('active');
        }
    });
}

// Social media alerts
function initSocialMediaAlerts() {
    document.querySelector('a[aria-label="Instagram"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('عذراً، لا يوجد قناة انستجرام متاحة حالياً.');
    });

    document.querySelector('a[aria-label="Twitter"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('عذراً، لا يوجد حساب تويتر متاح حالياً.');
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create stars background
    createStars();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize slideshow
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlideshow(index);
        });
    });
    
    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
    
    // Auto-advance slideshow
    let slideshowInterval = setInterval(nextSlide, 5000);
    
    // Pause slideshow on hover
    const slideshowContainer = document.querySelector('.image-slideshow');
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideshowInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
        slideshowInterval = setInterval(nextSlide, 5000);
    });
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize WhatsApp popup
    initWhatsAppPopup();
    
    // Initialize social media alerts
    initSocialMediaAlerts();
    
    // Animate elements on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Update scroll progress indicator
    window.addEventListener('scroll', updateScrollProgress);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Dark mode toggle (already in dark mode by default)
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', () => {
        // Since we're already in dark mode, this would toggle to light mode
        // But for this design, we'll keep it dark and just add a visual effect
        toggleButton.classList.add('active');
        setTimeout(() => {
            toggleButton.classList.remove('active');
        }, 300);
        
        // Visual feedback
        document.body.style.transition = 'all 0.3s ease';
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .form-submit');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(100, 255, 218, 0.4)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.width = '300px';
                ripple.style.height = '300px';
                ripple.style.opacity = '0';
                ripple.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 0);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
});