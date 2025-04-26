 // ===== إنشاء النجوم =====
 function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 3;
        const opacity = Math.random() * 0.5 + 0.3;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);
        
        starsContainer.appendChild(star);
    }
}

// ===== إنشاء الشهب =====
function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const shootingStarCount = 8;
    
    for (let i = 0; i < shootingStarCount; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        const width = Math.random() * 100 + 50;
        const posX = Math.random() * 80;
        const posY = Math.random() * 40;
        const angle = Math.random() * 20 - 30; // -30 to -10 degrees
        const delay = Math.random() * 15;
        const duration = Math.random() * 3 + 2;
        
        // Calculate travel distance based on angle
        const radians = angle * Math.PI / 180;
        const travelX = Math.cos(radians) * width * 2;
        const travelY = Math.sin(radians) * width * 2;
        
        shootingStar.style.width = `${width}px`;
        shootingStar.style.left = `${posX}%`;
        shootingStar.style.top = `${posY}%`;
        shootingStar.style.setProperty('--angle', `${angle}deg`);
        shootingStar.style.setProperty('--delay', `${delay}s`);
        shootingStar.style.setProperty('--duration', `${duration}s`);
        shootingStar.style.setProperty('--travel-x', `${travelX}px`);
        shootingStar.style.setProperty('--travel-y', `${travelY}px`);
        
        shootingStarsContainer.appendChild(shootingStar);
    }
}

// ===== إنشاء السحب =====
function createClouds() {
    const cloudsContainer = document.getElementById('clouds');
    const cloudCount = 15;
    
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        const width = Math.random() * 200 + 100;
        const height = width * 0.6;
        const posY = Math.random() * 80 + 10;
        const delay = Math.random() * 10;
        const duration = Math.random() * 60 + 60;
        const opacity = Math.random() * 0.3 + 0.1;
        
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;
        cloud.style.top = `${posY}%`;
        cloud.style.right = `${Math.random() * 100}%`;
        cloud.style.animationDelay = `${delay}s`;
        cloud.style.animationDuration = `${duration}s`;
        cloud.style.opacity = opacity;
        
        cloudsContainer.appendChild(cloud);
    }
}

// ===== تحديث نص التحميل وإدارة الانتقال =====
function handleTransition() {
    const loadingText = document.getElementById('loading-text');
    const transitionOverlay = document.getElementById('transition-overlay');
    
    // تحديث نص التحميل بعد اكتمال شريط التحميل
    setTimeout(() => {
        loadingText.textContent = "تم التحميل!";
        
        // بدء الانتقال بعد فترة قصيرة
        setTimeout(() => {
            transitionOverlay.classList.add('active');
            
            // الانتقال إلى الصفحة التالية
            setTimeout(() => {
                window.location.href = "المقدمة.html";
            }, 1000);
        }, 1000);
    }, 10500);
}

// ===== تأثير تتبع الماوس للطائرة =====
function setupMouseTracking() {
    document.addEventListener('mousemove', (e) => {
        const airplane = document.querySelector('.airplane-container');
        if (!airplane) return;
        
        // تطبيق التأثير فقط بعد انتهاء الرسوم المتحركة الأولية
        setTimeout(() => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
            
            // تطبيق تأثير خفيف للتتبع
            airplane.style.transform = `translateY(${yAxis * 10}px) rotate(${xAxis * 3}deg) translateZ(${Math.abs(xAxis) * 5}px)`;
        }, 8000);
    });
}

// ===== تهيئة الصفحة =====
window.addEventListener('load', () => {
    createStars();
    createShootingStars();
    createClouds();
    handleTransition();
    setupMouseTracking();
    
    // تأثير ظهور تدريجي للصفحة
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    });
    
    // إضافة تأثير اهتزاز خفيف للطائرة
    const airplane = document.querySelector('.airplane');
    if (airplane) {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 2;
            const randomY = (Math.random() - 0.5) * 2;
            airplane.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                airplane.style.transform = 'translate(0, 0)';
            }, 150);
        }, 3000);
    }
});

// ===== تحسين أداء الرسوم المتحركة =====
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('paused');
    } else {
        document.body.classList.remove('paused');
    }
});