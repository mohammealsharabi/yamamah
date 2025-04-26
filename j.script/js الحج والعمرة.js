 // إنشاء النجوم في الخلفية
 function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    // تقليل عدد النجوم لتحسين الأداء
    const starsCount = 50;
    
    // استخدام DocumentFragment لتحسين الأداء
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
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
        
        fragment.appendChild(star);
    }
    
    starsContainer.appendChild(fragment);
}

// تحسين أداء المؤشر المخصص
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;
    
    let isActive = false;
    let isHover = false;
    let lastTime = 0;
    const throttleTime = 16; // ~60fps
    
    const updateCursor = (e) => {
        const now = performance.now();
        if (now - lastTime < throttleTime) return;
        lastTime = now;
        
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        if (!isActive) {
            isActive = true;
            cursor.classList.add('active');
        }
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    const interactiveElements = document.querySelectorAll('.btn, .btn-book, .nav-link, .social-icon');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            isHover = true;
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            isHover = false;
            cursor.classList.remove('hover');
        });
    });
    
    document.addEventListener('mouseleave', () => {
        isActive = false;
        cursor.classList.remove('active');
    });
}

// تحسين أداء التمرير
function updateScrollProgress() {
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    if (!scrollProgressBar) return;
    
    let ticking = false;
    
    function update() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgressBar.style.width = `${progress}%`;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    });
}

// تحسين أداء تحريك العناصر
function animateOnScroll() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// تحسين أداء التمرير السلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// نافذة الحجز
function showBookingPrompt() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingPrompt() {
    document.getElementById('bookingModal').style.display = 'none';
}

// نافذة الخريطة
function showMap() {
    document.getElementById('mapModal').style.display = 'block';
}

function closeMap() {
    document.getElementById('mapModal').style.display = 'none';
}

// إغلاق النوافذ عند النقر خارجها
window.onclick = function(event) {
    if (event.target == document.getElementById('bookingModal')) {
        closeBookingPrompt();
    }
    if (event.target == document.getElementById('mapModal')) {
        closeMap();
    }
}

// تهيئة كل شيء عند تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createStars();
        initCustomCursor();
        initSmoothScroll();
    }, 100);
    
    animateOnScroll();
    updateScrollProgress();
});