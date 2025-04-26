 // إنشاء جزيئات الخلفية
 function createParticles() {
  const particlesContainer = document.querySelector('.particles-container');
  if (!particlesContainer) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // تعيين خصائص عشوائية
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animation = `float-particle ${duration}s linear ${delay}s infinite`;
    particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
    
    particlesContainer.appendChild(particle);
  }
}

// تحريك الأرقام
function animateNumbers() {
  const counters = document.querySelectorAll('.animated-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2500;
    const startTime = Date.now();
    const easeOutQuart = x => 1 - Math.pow(1 - x, 4);
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(easedProgress * target);
      counter.textContent = current === target ? `${target}+` : current;
      if (progress < 1) requestAnimationFrame(updateCount);
    };
    requestAnimationFrame(updateCount);
  });
}

// مراقبة العناصر للتحريك
function createObserver(elements, className, threshold = 0.2) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        if (entry.target.classList.contains('stat-box')) {
          animateNumbers();
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  elements.forEach(element => observer.observe(element));
}

// تحريك أشرطة التقدم
function animateProgressBars() {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
        progressObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-fill').forEach(bar => {
    progressObserver.observe(bar);
  });
}

// تنفيذ الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  
  // مراقبة العناصر
  createObserver(document.querySelectorAll('.stat-box'), 'in-view');
  createObserver(document.querySelectorAll('.timeline-item'), 'in-view');
  createObserver(document.querySelectorAll('.achievement-card'), 'in-view');
  
  // تحريك أشرطة التقدم
  animateProgressBars();
  
  // تمرير سلس للروابط
  document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.stats-section').offsetTop,
      behavior: 'smooth'
    });
  });
});