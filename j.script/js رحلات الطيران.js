<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="اليمامة للسفر والسياحة - خدمات سفر متكاملة وعروض مميزة">
    <title>اليمامة للسفر والسياحة</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #0a192f;
            --secondary: #112240;
            --accent: #64ffda;
            --gold: #ffd700;
            --text-primary: #e6f1ff;
            --text-secondary: #8892b0;
            --dark-bg: #020c1b;
            --card-bg: rgba(17, 34, 64, 0.7);
            --glow: rgba(100, 255, 218, 0.3);
            --transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --font-family: 'Tajawal', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: var(--font-family);
        }

        body {
            background: var(--dark-bg);
            color: var(--text-primary);
            line-height: 1.8;
            overflow-x: hidden;
            position: relative;
            will-change: transform;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        /* تحسين أداء النجوم في الخلفية */
        .stars-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
            contain: strict;
        }

        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            opacity: 0;
            animation: twinkle var(--duration) ease-in-out infinite;
            animation-delay: var(--delay);
            will-change: opacity, transform;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: var(--opacity); transform: scale(1); }
        }

        /* تحسين أداء تأثير الضباب */
        .fog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, transparent 0%, var(--dark-bg) 70%);
            opacity: 0.7;
            z-index: 1;
            pointer-events: none;
            contain: strict;
        }

        /* تحسين أداء مؤشر التمرير */
        .scroll-indicator-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(100, 255, 218, 0.1);
            z-index: 1000;
            transform: translateZ(0);
        }

        .scroll-indicator {
            height: 100%;
            background: var(--accent);
            width: 0%;
            transition: width 0.1s ease;
            will-change: width;
        }

        /* تحسين أداء المؤشر المخصص */
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: transparent;
            border: 2px solid var(--accent);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: width 0.3s, height 0.3s, background 0.3s;
            opacity: 0;
            will-change: transform;
        }

        .custom-cursor.active {
            opacity: 1;
            width: 50px;
            height: 50px;
            background: rgba(100, 255, 218, 0.1);
            border: 1px solid var(--accent);
        }

        /* تحسين أداء الشعار والقائمة */
        .logo-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background: rgba(10, 25, 47, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform;
        }

        .logo-container:hover {
            box-shadow: 0 5px 20px var(--glow);
            transform: translateY(-3px);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-right: 10px;
            background: linear-gradient(to right, var(--text-primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .menu-container {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 15px;
            background: rgba(10, 25, 47, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform;
        }

        .menu-container:hover {
            box-shadow: 0 5px 20px var(--glow);
            transform: translateY(-3px);
        }

        .menu-line {
            width: 25px;
            height: 2px;
            background: var(--accent);
            transition: transform 0.3s ease, opacity 0.3s ease;
            will-change: transform, opacity;
        }

        .menu-container:hover .menu-line:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        .menu-container:hover .menu-line:nth-child(2) {
            opacity: 0;
        }

        .menu-container:hover .menu-line:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        /* تحسين أداء قسم البطل */
        .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            z-index: 2;
            overflow: hidden;
            transform: translateZ(0);
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(145deg, rgba(10, 25, 47, 0.9), rgba(2, 12, 27, 0.95)),
                        url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            z-index: -1;
            filter: brightness(0.6) contrast(1.2);
            will-change: transform;
        }

        .hero-content {
            max-width: 600px;
            padding: 3rem;
            background: rgba(17, 34, 64, 0.6);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 1rem;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px var(--glow);
            animation: fadeIn 1.5s ease-out, float 6s ease-in-out infinite;
            border: 1px solid rgba(100, 255, 218, 0.2);
            position: relative;
            overflow: hidden;
            transform: translateZ(0);
            will-change: transform;
        }

        .hero-content::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, var(--glow) 0%, transparent 60%);
            opacity: 0.1;
            animation: rotate 15s linear infinite;
            will-change: transform;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .hero-title {
            font-size: 3rem;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-weight: 800;
        }

        .hero-title span {
            color: var(--accent);
        }

        .hero-description {
            font-size: 1.2rem;
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 2rem;
        }

        /* تحسين أداء الأقسام */
        .section {
            padding: 8rem 2rem;
            position: relative;
            z-index: 2;
            contain: content;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--text-primary);
            position: relative;
            z-index: 2;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--accent);
            box-shadow: 0 0 10px var(--glow);
        }

        /* تحسين أداء بطاقات الخدمات */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 3rem;
            max-width: 1300px;
            margin: 0 auto;
            contain: content;
        }

        .service-card {
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(100, 255, 218, 0.1);
            transform: translateY(50px);
            opacity: 0;
            will-change: transform, opacity;
        }

        .service-card.animated {
            transform: translateY(0);
            opacity: 1;
        }

        .service-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3), 0 0 20px var(--glow);
            border-color: rgba(100, 255, 218, 0.3);
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .service-card:hover::before {
            opacity: 1;
        }

        .service-icon {
            width: 80px;
            height: 80px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            position: relative;
            border: 1px solid rgba(100, 255, 218, 0.3);
            will-change: transform;
        }

        .service-icon i {
            color: var(--accent);
            font-size: 2rem;
        }

        .service-icon::after {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 50%;
            border: 1px solid var(--accent);
            opacity: 0;
            transition: all 0.5s ease;
        }

        .service-card:hover .service-icon {
            transform: rotate(15deg) scale(1.1);
            box-shadow: 0 0 20px var(--glow);
        }

        .service-card:hover .service-icon::after {
            opacity: 1;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
        }

        .service-title {
            color: var(--text-primary);
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
        }

        .service-description {
            color: var(--text-secondary);
        }

        /* تحسين أداء قسم الوجهات */
        .destinations-section {
            padding: 8rem 2rem;
            position: relative;
            z-index: 2;
            background: linear-gradient(to bottom, transparent, var(--primary), transparent);
            contain: content;
        }

        .destinations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
            max-width: 1300px;
            margin: 0 auto;
            contain: content;
        }

        .destination-card {
            background-size: cover;
            background-position: center;
            height: 450px;
            border-radius: 1rem;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease, border-color 0.5s ease;
            border: 1px solid rgba(100, 255, 218, 0.1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transform: translateY(50px);
            opacity: 0;
            filter: brightness(0.8) contrast(1.1);
            will-change: transform, opacity, filter;
        }

        .destination-card.animated {
            transform: translateY(0);
            opacity: 1;
        }

        .destination-card:hover {
            transform: scale(1.03);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 0 30px var(--glow);
            filter: brightness(1) contrast(1.2);
            border-color: rgba(100, 255, 218, 0.3);
        }

        .destination-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 2rem;
            background: linear-gradient(to top, rgba(2, 12, 27, 0.95), transparent);
            color: var(--text-primary);
            transform: translateY(70%);
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            will-change: transform;
        }

        .destination-card:hover .destination-overlay {
            transform: translateY(0);
        }

        .destination-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .destination-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.4s ease;
        }

        .destination-card:hover .destination-title::after {
            width: 100%;
        }

        .destination-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .destination-price {
            font-size: 1.1rem;
            color: var(--text-secondary);
        }

        /* تحسين أداء قسم العروض الخاصة */
        .special-offers {
            padding: 8rem 2rem;
            max-width: 1300px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 2;
            contain: content;
        }

        .offers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            contain: content;
        }

        .offer-card {
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(100, 255, 218, 0.1);
            transform: translateY(50px);
            opacity: 0;
            will-change: transform, opacity;
        }

        .offer-card.animated {
            transform: translateY(0);
            opacity: 1;
        }

        .offer-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3), 0 0 20px var(--glow);
            border-color: rgba(100, 255, 218, 0.3);
        }

        .offer-card::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, transparent 100%);
            transition: all 0.6s ease;
            will-change: transform;
        }

        .offer-card:hover::before {
            top: 0;
            left: 0;
        }

        .offer-title {
            color: var(--accent);
            margin: 1.5rem 0;
            position: relative;
            display: inline-block;
            font-size: 1.5rem;
        }

        .offer-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.4s ease;
        }

        .offer-card:hover .offer-title::after {
            width: 100%;
        }

        .offer-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }

        /* تحسين أداء الأزرار */
        .btn {
            background: transparent;
            color: var(--accent);
            padding: 0.8rem 1.8rem;
            border: 1px solid var(--accent);
            border-radius: 0.5rem;
            cursor: pointer;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            position: relative;
            overflow: hidden;
            font-weight: 600;
            letter-spacing: 1px;
            z-index: 1;
            will-change: transform;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(100, 255, 218, 0.1);
            transition: width 0.3s ease;
            z-index: -1;
        }

        .btn:hover {
            box-shadow: 0 0 15px var(--glow);
            transform: translateY(-3px);
        }

        .btn:hover::before {
            width: 100%;
        }

        /* تحسين أداء تأثيرات الريبل */
        .ripple {
            position: absolute;
            background: rgba(100, 255, 218, 0.4);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: ripple-animation 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            will-change: width, height, opacity;
        }

        @keyframes ripple-animation {
            0% {
                width: 0;
                height: 0;
                opacity: 0.8;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }

        /* تحسين أداء التذييل */
        .footer {
            background: var(--primary);
            color: var(--text-primary);
            padding: 4rem 2rem;
            position: relative;
            z-index: 2;
            transform: translateZ(0);
        }

        .footer::before {
            content: '';
            position: absolute;
            top: -60px;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(to bottom, transparent, var(--primary));
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .social-icon {
            font-size: 1.8rem;
            cursor: pointer;
            transition: color 0.3s ease, transform 0.3s ease;
            color: var(--text-secondary);
        }

        .social-icon:hover {
            color: var(--accent);
            transform: translateY(-5px);
        }

        .copyright {
            color: var(--text-secondary);
            font-size: 0.9rem;
            text-align: center;
        }

        /* تحسين أداء الرسوم المتحركة */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        /* تحسين أداء الأنماط المستجيبة */
        @media (max-width: 768px) {
            .hero-section {
                min-height: 80vh;
                padding: 1rem;
            }
            
            .hero-content {
                padding: 2rem;
                max-width: 100%;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .services-section,
            .destinations-section,
            .special-offers {
                padding: 4rem 1rem;
            }

            .destination-card {
                height: 350px;
            }

            .destination-title {
                font-size: 1.5rem;
            }

            .logo-container, .menu-container {
                padding: 8px;
            }

            .logo {
                font-size: 1.2rem;
            }
        }

        /* تحسين أداء القائمة المنسدلة */
        .nav-menu {
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100vh;
            background: var(--primary);
            z-index: 999;
            padding: 80px 20px 20px;
            transition: right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
        }

        .nav-menu.active {
            right: 0;
        }

        .nav-menu-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .nav-menu-list {
            list-style: none;
        }

        .nav-menu-item {
            margin-bottom: 15px;
        }

        .nav-menu-link {
            color: var(--text-primary);
            text-decoration: none;
            font-size: 1.2rem;
            display: block;
            padding: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .nav-menu-link:hover {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent);
            transform: translateX(-5px);
        }

        /* تحسين أداء الخلفية المتحركة */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
    </style>
</head>
<body>
    <!-- تأثيرات الخلفية -->
    <div class="stars-container" id="starsContainer"></div>
    <div class="fog"></div>

    <!-- مؤشر التمرير -->
    <div class="scroll-indicator-container">
        <div class="scroll-indicator" id="scrollIndicator"></div>
    </div>

    <!-- المؤشر المخصص -->
    <div class="custom-cursor" id="customCursor"></div>

    <!-- الشعار -->
    <div class="logo-container">
        <div class="logo">AL-YAMAMAH</div>
    </div>

    <!-- القائمة -->
    <div class="menu-container" id="menuToggle">
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
    </div>

    <!-- القائمة المنسدلة -->
    <div class="nav-menu" id="navMenu">
        <button class="nav-menu-close" id="navMenuClose">
            <i class="fas fa-times"></i>
        </button>
        <ul class="nav-menu-list">
            <li class="nav-menu-item"><a href="#" class="nav-menu-link">الرئيسية</a></li>
            <li class="nav-menu-item"><a href="#services" class="nav-menu-link">خدماتنا</a></li>
            <li class="nav-menu-item"><a href="#destinations" class="nav-menu-link">وجهات السفر</a></li>
            <li class="nav-menu-item"><a href="#offers" class="nav-menu-link">العروض الخاصة</a></li>
            <li class="nav-menu-item"><a href="#contact" class="nav-menu-link">اتصل بنا</a></li>
            <li class="nav-menu-item"><a href="hajj.html" class="nav-menu-link">الحج والعمرة</a></li>
        </ul>
    </div>

    <!-- الخلفية المتحركة -->
    <div class="overlay" id="overlay"></div>

    <!-- القسم الرئيسي -->
    <section class="hero-section">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="hero-title">
                رحلات <span>استثنائية</span> تنتظرك
            </h1>
            <p class="hero-description">
                اكتشف العالم مع أفضل العروض الحصرية لرحلات الطيران، تمتع بخدماتنا المميزة 
                وحجوزات مرنة تلبي جميع احتياجاتك
            </p>
            <button class="btn">استكشف الرحلات</button>
        </div>
    </section>

    <!-- قسم الخدمات -->
    <section class="section services-section" id="services">
        <h2 class="section-title">خدماتنا المميزة</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-plane-departure"></i>
                </div>
                <h3 class="service-title">حجز فوري</h3>
                <p class="service-description">
                    تأكيد فوري للحجز مع خيارات دفع متعددة وأسعار تنافسية تناسب جميع الميزانيات
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 class="service-title">تعديل المواعيد</h3>
                <p class="service-description">
                    مرونة في تغيير مواعيد الرحلات وفق سياسة التعديلات الميسرة بدون رسوم إضافية
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="service-title">ضمان الاسترداد</h3>
                <p class="service-description">
                    استرداد كامل المبلغ وفق الشروط مع معالجة سريعة خلال 24 ساعة لراحة بالك
                </p>
            </div>
        </div>
    </section>

    <!-- قسم الوجهات -->
    <section class="destinations-section" id="destinations">
        <h2 class="section-title">وجهات مميزة</h2>
        <div class="destinations-grid">
            <div class="destination-card" 
                 style="background-image: url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80')">
                <div class="destination-overlay">
                    <h3 class="destination-title">دبي</h3>
                    <div class="destination-info">
                        <p class="destination-price">رحلة اقتصادية من 799 ر.س</p>
                        <button class="btn">احجز الآن</button>
                    </div>
                </div>
            </div>

            <div class="destination-card" 
                 style="background-image: url('https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1920&q=80')">
                <div class="destination-overlay">
                    <h3 class="destination-title">لندن</h3>
                    <div class="destination-info">
                        <p class="destination-price">رحلة فاخرة من 2499 ر.س</p>
                        <button class="btn">احجز الآن</button>
                    </div>
                </div>
            </div>

            <div class="destination-card" 
                 style="background-image: url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1920&q=80')">
                <div class="destination-overlay">
                    <h3 class="destination-title">طوكيو</h3>
                    <div class="destination-info">
                        <p class="destination-price">رحلة مميزة من 3299 ر.س</p>
                        <button class="btn">احجز الآن</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم العروض الخاصة -->
    <section class="section special-offers" id="offers">
        <h2 class="section-title">عروضنا الخاصة</h2>
        <div class="offers-grid">
            <div class="offer-card">
                <h3 class="offer-title">خصم 20% على رحلات آسيا</h3>
                <p class="offer-description">احجز قبل 30 يومًا واستمتع بخصم 20% على جميع رحلاتنا إلى وجهات آسيا المميزة</p>
                <button class="btn">اكتشف العرض</button>
            </div>
            <div class="offer-card">
                <h3 class="offer-title">رحلة عودة مجانية</h3>
                <p class="offer-description">احجز رحلتك ذهابًا وإيابًا واحصل على رحلة العودة مجانًا عند حجزك المبكر</p>
                <button class="btn">اكتشف العرض</button>
            </div>
            <div class="offer-card">
                <h3 class="offer-title">خدمات فاخرة بسعر معقول</h3>
                <p class="offer-description">استمتع بخدماتنا الفاخرة مع خصم خاص على حجوزات الدرجة الأولى ورجال الأعمال</p>
                <button class="btn">اكتشف العرض</button>
            </div>
        </div>
    </section>

    <!-- قسم الاتصال -->
    <section class="section" id="contact">
        <h2 class="section-title">تواصل معنا</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <h3 class="service-title">اتصل بنا</h3>
                <p class="service-description">
                    يمكنك الاتصال بنا على الرقم: <br>
                    +967 777796408
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3 class="service-title">البريد الإلكتروني</h3>
                <p class="service-description">
                    راسلنا على البريد الإلكتروني: <br>
                    info@alyamamah.com
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <h3 class="service-title">موقعنا</h3>
                <p class="service-description">
                    صنعاء - شارع الستين الشمالي <br>
                    أمام كلية الطب - جولة الولاعة
                </p>
            </div>
        </div>
    </section>

    <!-- التذييل -->
    <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <i class="fab fa-instagram social-icon"></i>
                <i class="fab fa-twitter social-icon"></i>
                <i class="fab fa-linkedin social-icon"></i>
            </div>
            <p class="copyright">
                © 2024 اليمامة للسفريات والسياحة وخدمات الحج والعمرة
            </p>
        </div>
    </footer>

    <script>
        // إنشاء النجوم في الخلفية
        function createStars() {
            const starsContainer = document.getElementById('starsContainer');
            if (!starsContainer) return;
            
            // تقليل عدد النجوم لتحسين الأداء
            const starsCount = 100;
            
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
            
            // إضافة جميع النجوم دفعة واحدة لتحسين الأداء
            starsContainer.appendChild(fragment);
        }

        // تأثير المؤشر المخصص
        function initCustomCursor() {
            const cursor = document.getElementById('customCursor');
            if (!cursor) return;
            
            // استخدام متغير لتخزين حالة المؤشر
            let isActive = false;
            
            // استخدام throttle لتحسين أداء حدث mousemove
            let lastTime = 0;
            const throttleTime = 10; // بالمللي ثانية
            
            document.addEventListener('mousemove', (e) => {
                const now = performance.now();
                if (now - lastTime < throttleTime) return;
                lastTime = now;
                
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
                
                if (!isActive) {
                    isActive = true;
                    cursor.style.opacity = '1';
                }
            });
            
            document.addEventListener('mousedown', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
            });
            
            document.addEventListener('mouseup', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
            
            // استخدام تحديد أكثر كفاءة للعناصر القابلة للنقر
            const interactiveElements = document.querySelectorAll('.btn, .service-card, .destination-card, .offer-card, .nav-menu-link, .social-icon');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.classList.add('active');
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.classList.remove('active');
                });
            });
            
            document.addEventListener('mouseleave', () => {
                isActive = false;
                cursor.style.opacity = '0';
            });
        }

        // تحديث مؤشر التمرير
        function updateScrollIndicator() {
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (!scrollIndicator) return;
            
            // استخدام requestAnimationFrame لتحسين الأداء
            function update() {
                const totalHeight = document.body.scrollHeight - window.innerHeight;
                const progress = (window.pageYOffset / totalHeight) * 100;
                scrollIndicator.style.width = `${progress}%`;
                
                requestAnimationFrame(update);
            }
            
            requestAnimationFrame(update);
        }

        // تحريك العناصر عند التمرير
        function animateOnScroll() {
            // استخدام Intersection Observer API لتحسين الأداء
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // تطبيق المراقب على العناصر
            document.querySelectorAll('.service-card, .destination-card, .offer-card').forEach(element => {
                observer.observe(element);
            });
        }

        // تأثيرات الأزرار
        function initButtonEffects() {
            const buttons = document.querySelectorAll('.btn');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // تأثير الـ ripple
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    ripple.style.left = `${e.clientX - btn.getBoundingClientRect().left}px`;
                    ripple.style.top = `${e.clientY - btn.getBoundingClientRect().top}px`;
                    btn.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 800);
                });
            });
        }

        // تأثيرات التمرير للخلفية
        function initParallaxEffect() {
            window.addEventListener('scroll', () => {
                const scrollPosition = window.pageYOffset;
                const heroSection = document.querySelector('.hero-bg');
                if (heroSection) {
                    heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
                }
            });
        }

        // تهيئة القائمة المنسدلة
        function initNavMenu() {
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');
            const navMenuClose = document.getElementById('navMenuClose');
            const overlay = document.getElementById('overlay');
            const navLinks = document.querySelectorAll('.nav-menu-link');
            
            if (!menuToggle || !navMenu || !navMenuClose || !overlay) return;
            
            menuToggle.addEventListener('click', () => {
                navMenu.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            function closeMenu() {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            navMenuClose.addEventListener('click', closeMenu);
            overlay.addEventListener('click', closeMenu);
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                    
                    // التمرير السلس إلى القسم المطلوب
                    const targetId = link.getAttribute('href');
                    if (targetId.startsWith('#') && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            setTimeout(() => {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }, 300);
                        }
                    }
                });
            });
        }

        // تنفيذ الدوال عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            // استخدام setTimeout لتأخير التهيئة غير الضرورية
            setTimeout(() => {
                createStars();
                initCustomCursor();
                initButtonEffects();
                initParallaxEffect();
                initNavMenu();
                
                // تأثيرات إضافية للأيقونات في التذييل
                document.querySelectorAll('.social-icon').forEach(icon => {
                    icon.addEventListener('mouseenter', () => {
                        icon.style.color = 'var(--accent)';
                        icon.style.transform = 'translateY(-5px)';
                    });
                    
                    icon.addEventListener('mouseleave', () => {
                        icon.style.color = 'var(--text-secondary)';
                        icon.style.transform = 'translateY(0)';
                    });
                });
                
                // تأثير تحميل الصفحة
                document.body.style.opacity = '1';
            }, 100);
            
            // تحريك العناصر عند التمرير
            animateOnScroll();
            
            // تحديث مؤشر التمرير
            updateScrollIndicator();
        });
    </script>
</body>
</html>