<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="اليمامة للسفر والسياحة - فنادق فاخرة في السعودية">
    <title>الفنادق | اليمامة للسفر والسياحة</title>
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

        /* تحسين أداء قسم البطل */
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 0;
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: brightness(0.8) contrast(1.1);
        }

        .hero-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            width: 90%;
            margin: 0 auto;
            padding: 4rem 2rem;
            background: rgba(10, 25, 47, 0.3);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 1s ease-out;
        }

        .hero-text {
            flex: 1;
            padding-right: 2rem;
        }

        .hero-title {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            line-height: 1.2;
        }

        .hero-title span {
            color: #64ffda;
            position: relative;
            display: inline-block;
        }

        .hero-title span::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #64ffda;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s ease;
        }

        .hero-title:hover span::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        .hero-description {
            font-size: 1.2rem;
            color: #e6f1ff;
            margin-bottom: 2rem;
            line-height: 1.6;
            max-width: 500px;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .btn {
            padding: 0.8rem 2rem;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-primary {
            background: #64ffda;
            color: #0a192f;
            border: none;
            box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
        }

        .btn-primary:hover {
            background: #0a192f;
            color: #64ffda;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #64ffda;
            border: 2px solid #64ffda;
        }

        .btn-secondary:hover {
            background: #64ffda;
            color: #0a192f;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
        }

        .hero-stats {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2rem;
            background: rgba(17, 34, 64, 0.4);
            border-radius: 15px;
            border: 1px solid rgba(100, 255, 218, 0.2);
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            display: block;
            font-size: 2.5rem;
            color: #64ffda;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #e6f1ff;
            font-size: 1rem;
        }

        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: #64ffda;
            font-size: 1.5rem;
            animation: bounce 2s infinite;
            cursor: pointer;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes zoomIn {
            from {
                transform: scale(1);
            }
            to {
                transform: scale(1.1);
            }
        }

        @media (max-width: 768px) {
            .hero-content {
                flex-direction: column;
                text-align: center;
                padding: 2rem;
            }

            .hero-text {
                padding-right: 0;
                margin-bottom: 2rem;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-description {
                font-size: 1rem;
                margin: 0 auto 2rem;
            }

            .hero-buttons {
                justify-content: center;
            }

            .hero-stats {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
            }

            .stat-item {
                flex: 1;
                min-width: 120px;
            }

            .stat-number {
                font-size: 2rem;
            }
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
            border-radius: 1rem;
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
            margin: 0 auto 2rem;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            position: relative;
            border: 1px solid rgba(100, 255, 218, 0.3);
            will-change: transform;
            animation: pulseIcon 3s infinite alternate;
        }

        @keyframes pulseIcon {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
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
            animation-play-state: paused;
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
            text-align: center;
        }

        .service-description {
            color: var(--text-secondary);
            text-align: center;
        }

      
        .hotels-section {
            padding: 8rem 2rem;
            position: relative;
            z-index: 2;
            background: linear-gradient(to bottom, transparent, var(--primary), transparent);
            contain: content;
        }

        .hotels-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 3rem;
            max-width: 1300px;
            margin: 0 auto;
            contain: content;
        }

        .hotel-card {
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(100, 255, 218, 0.1);
            transform: translateY(50px);
            opacity: 0;
            will-change: transform, opacity;
        }

        .hotel-card.animated {
            transform: translateY(0);
            opacity: 1;
        }

        .hotel-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3), 0 0 20px var(--glow);
            border-color: rgba(100, 255, 218, 0.3);
        }

        .hotel-image-container {
            width: 100%;
            height: 250px;
            overflow: hidden;
            position: relative;
        }

        .hotel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
            will-change: transform;
        }

        .hotel-card:hover .hotel-image {
            transform: scale(1.1);
        }

        
        .hotel-content {
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
        }

        .hotel-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            position: relative;
            display: inline-block;
        }

        .hotel-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.4s ease;
        }

        .hotel-card:hover .hotel-title::after {
            width: 100%;
        }

        .hotel-description {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .hotel-features {
            display: flex;
            gap: 15px;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }

        .hotel-feature {
            display: flex;
            align-items: center;
            gap: 5px;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .hotel-feature i {
            color: var(--accent);
        }

        .hotel-price-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
        }

        .hotel-price {
            font-size: 1.2rem;
            color: var(--accent);
            font-weight: bold;
        }

        .hotel-price span {
            font-size: 0.9rem;
            color: var(--text-secondary);
            font-weight: normal;
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

        .btn-book {
            background: var(--accent);
            color: var(--dark-bg);
            padding: 0.8rem 1.8rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            font-weight: 600;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
            z-index: 1;
            border: none;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            will-change: transform;
        }

        .btn-book::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transition: width 0.3s ease;
            z-index: -1;
        }

        .btn-book:hover {
            box-shadow: 0 5px 15px var(--glow);
            transform: translateY(-3px);
        }

        .btn-book:hover::before {
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
            text-align: center;
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
            .hotels-section {
                padding: 4rem 1rem;
            }

            .hotel-card {
                max-width: 400px;
                margin: 0 auto;
            }

            .logo-container {
                padding: 8px;
            }

            .logo {
                font-size: 1.2rem;
            }
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

        /* تحسين أداء زر العودة للأعلى */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(10, 25, 47, 0.8);
            color: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(100, 255, 218, 0.2);
            will-change: transform, opacity;
        }

        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px var(--glow);
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--accent);
}

.modal-title {
  color: var(--gold);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-text {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.highlight {
  color: var(--accent);
  font-weight: bold;
}

.loader {
  border: 4px solid var(--text-secondary);
  border-top: 4px solid var(--accent);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 1.5rem auto 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.btn-book {
  background: var(--accent);
  color: var(--primary);
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 5px 15px var(--glow);
}

.btn-book:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px var(--glow);
}
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

/* Hotel Cards */
.hotel-card {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  direction: rtl;
  margin: 1rem;
}

.hotel-card:hover {
  transform: translateY(-5px);
}

.hotel-image-container {
  position: relative;
}



.hotel-rating {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(10, 25, 47, 0.8);
            color: var(--gold);
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.9rem;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 215, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 2;
        }


.hotel-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.hotel-content {
  padding: 20px;
}

.hotel-title {
  color: var(--gold);
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.hotel-description {
  color: var(--text-primary);
  margin: 15px 0;
}

.hotel-features {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.hotel-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

.hotel-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hotel-price {
  color: var(--accent);
  font-size: 1.2rem;
  font-weight: bold;
}

.hotel-price span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--accent);
}

.modal-title {
  color: var(--gold);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-text {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.highlight {
  color: var(--accent);
  font-weight: bold;
}

.hotel-name {
  color: var(--gold);
  font-weight: bold;
}

.loader {
  border: 4px solid var(--text-secondary);
  border-top: 4px solid var(--accent);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 1.5rem auto 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Button styling */
.btn-book {
  background: var(--accent);
  color: var(--primary);
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 5px 15px var(--glow);
}

.btn-book:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px var(--glow);
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
        <a href="index.html" class="logo">AL-YAMAMAH</a>
    </div>

    <!-- زر العودة للأعلى -->
    <div class="back-to-top" id="backToTop">
        <i class="fas fa-arrow-up"></i>
    </div>

    <!-- القسم الرئيسي -->
    <section class="hero-section">
        <div class="hero-bg" style="background: linear-gradient(145deg, rgba(10, 25, 47, 0.5), rgba(2, 12, 27, 0.6)),
                        url('578501585.jpg'); background-size: cover; background-position: center; animation: zoomIn 8s ease-in-out infinite alternate;"></div>
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    فنادق <span>فاخرة</span> في السعودية
                </h1>
                <p class="hero-description">
                    اكتشف أفضل الفنادق في المملكة العربية السعودية، حيث تلتقي الفخامة بالراحة وتجربة إقامة لا تُنسى.
                </p>
                <div class="hero-buttons">
                   
                    <button class="btn btn-secondary" onclick="window.location.href='https://www.facebook.com/yamamhgroup/'">تواصل معنا</button>
                </div>
            </div>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">فندق فاخر</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">1000+</span>
                    <span class="stat-label">عميل راضي</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">دعم فني</span>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>

    <!-- قسم الخدمات -->
    <section class="section services-section" id="services">
        <h2 class="section-title">خدماتنا المميزة</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-hotel"></i>
                </div>
                <h3 class="service-title">فنادق فاخرة</h3>
                <p class="service-description">
                    اختر من بين مجموعة واسعة من الفنادق الفاخرة في جميع أنحاء المملكة بأفضل الأسعار.
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 class="service-title">حجوزات مرنة</h3>
                <p class="service-description">
                    خطط لرحلتك بكل أريحية مع خيارات الحجز المرنة وإمكانية الإلغاء المجاني.
                </p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="service-title">أمان وموثوقية</h3>
                <p class="service-description">
                    نضمن لك تجربة حجز آمنة وموثوقة مع دعم على مدار الساعة لجميع استفساراتك.
                </p>
            </div>
        </div>
    </section>

    <!-- قسم الفنادق -->
    <section class="hotels-section" id="hotels">
        <h2 class="section-title">فنادق سعودية مميزة</h2>
        <div class="hotels-grid">
            <!-- Hotel 1 -->
            <div class="hotel-card">
                <div class="hotel-image-container">
                    <div class="hotel-rating">
                        <i class="fas fa-star"></i>
                        <span>5.0</span>
                    </div>
                    <img src="578501585.jpg" alt="فندق الفيصلية الرياض" class="hotel-image" loading="lazy">
                </div>
                <div class="hotel-content">
                    <h3 class="hotel-title">فندق الفيصلية الرياض</h3>
                    <p class="hotel-description">
                        يقع في قلب مدينة الرياض، ويتميز بتصميم معماري فريد وإطلالات خلابة على المدينة مع خدمات فاخرة.
                    </p>
                    <div class="hotel-features">
                        <div class="hotel-feature">
                            <i class="fas fa-wifi"></i>
                            <span>واي فاي مجاني</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-swimming-pool"></i>
                            <span>مسبح</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-utensils"></i>
                            <span>مطعم</span>
                        </div>
                    </div>
                    <div class="hotel-price-container">
                        <div class="hotel-price">1200 ر.س <span>/ الليلة</span></div>
                        <button class="btn-book" data-hotel="فندق الفيصلية الرياض" data-phone="777794567" data-time="15">احجز الآن</button>
                    </div>
                </div>
            </div>
    
            <!-- Hotel 2 -->
            <div class="hotel-card">
                <div class="hotel-image-container">
                    <div class="hotel-rating">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <img src="597133778.jpg" alt="فندق شيراتون جدة" class="hotel-image" loading="lazy">
                </div>
                <div class="hotel-content">
                    <h3 class="hotel-title">فندق شيراتون جدة</h3>
                    <p class="hotel-description">
                        يتميز بموقع مثالي على كورنيش جدة، ويوفر غرفًا أنيقة ومرافق ترفيهية متنوعة مع إطلالة على البحر.
                    </p>
                    <div class="hotel-features">
                        <div class="hotel-feature">
                            <i class="fas fa-wifi"></i>
                            <span>واي فاي مجاني</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-dumbbell"></i>
                            <span>صالة رياضية</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-spa"></i>
                            <span>سبا</span>
                        </div>
                    </div>
                    <div class="hotel-price-container">
                        <div class="hotel-price">950 ر.س <span>/ الليلة</span></div>
                        <button class="btn-book" data-hotel="فندق شيراتون جدة" data-phone="777794567" data-time="30">احجز الآن</button>
                    </div>
                </div>
            </div>
    
            <!-- Hotel 3 -->
            <div class="hotel-card">
                <div class="hotel-image-container">
                    <div class="hotel-rating">
                        <i class="fas fa-star"></i>
                        <span>4.7</span>
                    </div>
                    <img src="496102470.jpg" alt="فندق موفنبيك الخبر" class="hotel-image" loading="lazy">
                </div>
                <div class="hotel-content">
                    <h3 class="hotel-title">فندق موفنبيك الخبر</h3>
                    <p class="hotel-description">
                        يوفر تجربة إقامة فاخرة في مدينة الخبر، مع سهولة الوصول إلى المراكز التجارية والمعالم السياحية.
                    </p>
                    <div class="hotel-features">
                        <div class="hotel-feature">
                            <i class="fas fa-wifi"></i>
                            <span>واي فاي مجاني</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-parking"></i>
                            <span>موقف سيارات</span>
                        </div>
                        <div class="hotel-feature">
                            <i class="fas fa-coffee"></i>
                            <span>إفطار مجاني</span>
                        </div>
                    </div>
                    <div class="hotel-price-container">
                        <div class="hotel-price">850 ر.س <span>/ الليلة</span></div>
                        <button class="btn-book" data-hotel="فندق موفنبيك الخبر" data-phone="777794567" data-time="45">احجز الآن</button>
                    </div>
                </div>
            </div>
    
            <!-- Single Modal for All Hotels -->
            <div class="modal-overlay" id="bookingModal">
                <div class="modal-content">
                    <button class="close-btn">×</button>
                    <div class="modal-body">
                        <h2 class="modal-title">الحجز قيد التجهيز</h2>
                        <p class="modal-text">
                            سيتم تحويلك إلى ممثل الخدمة خلال <span class="highlight">10 ثانية</span> لإتمام حجز فندق <span class="hotel-name"></span>
                        </p>
                        <div class="loader"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    

    <!-- التذييل -->
    <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <i class="fab fa-whatsapp social-icon" onclick="showBranchDialog()"></i>
            </div>
            <p class="copyright">
                © 2024 اليمامة للسفر والسياحة. جميع الحقوق محفوظة.
            </p>
        </div>

        <div id="branchDialog" class="branch-dialog" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
        background: var(--secondary); padding: 2rem; border-radius: 10px; text-align: center;
         box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 1000; animation: fadeIn 0.3s ease;">
            <h3 style="color: var(--accent); margin-bottom: 1.5rem;">اختر الفرع</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <button onclick="redirectToWhatsApp('777794567')" class="btn btn-primary" style="width: 100%;">فرع تعز</button>
                <button onclick="redirectToWhatsApp('777796408')" class="btn btn-primary" style="width: 100%;">فرع صنعاء</button>
                <button onclick="redirectToWhatsApp('735026755')" class="btn btn-primary" style="width: 100%;">فرع عدن</button>
                <button onclick="closeBranchDialog()" class="btn btn-secondary" style="width: 100%;">إلغاء</button>
            </div>
        </div>

        <script>
            function showBranchDialog() {
                document.getElementById('branchDialog').style.display = 'block';
            }
            
            function closeBranchDialog() {
                document.getElementById('branchDialog').style.display = 'none';
            }
            
            function redirectToWhatsApp(number) {
                window.location.href = 'https://wa.me/' + number;
            }
        </script>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-book');
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.querySelector('.close-btn');
  const modalText = document.querySelector('.modal-text');
  const hotelName = document.querySelector('.hotel-name');
  const highlight = document.querySelector('.highlight');

  let currentHotel = null;
  let redirectTimeout = null;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get hotel data from button attributes
      const hotel = btn.dataset.hotel;
      const phone = btn.dataset.phone;
      
      // Fixed time to 10 seconds
      const time = 10;

      // Update modal content
      hotelName.textContent = hotel;
      highlight.textContent = `${time} ثانية`;
      
      // Save current hotel data
      currentHotel = { phone, time };

      // Show modal
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Clear previous timeout
      clearTimeout(redirectTimeout);

      // Set new timeout for 10 seconds
      redirectTimeout = setTimeout(() => {
        window.location.href = `https://wa.me/${phone}`;
      }, 10000);
    });
  });

  // Close modal handlers
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearTimeout(redirectTimeout);
    currentHotel = null;
  };

  closeBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});

        
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
            document.querySelectorAll('.service-card, .hotel-card').forEach(element => {
                observer.observe(element);
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
            const interactiveElements = document.querySelectorAll('.btn, .btn-book, .service-card, .hotel-card, .social-icon, .back-to-top');
            
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

        // تأثيرات الأزرار
        function initButtonEffects() {
            const buttons = document.querySelectorAll('.btn, .btn-book');
            
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

        // تهيئة زر العودة للأعلى
        function initBackToTop() {
            const backToTopButton = document.getElementById('backToTop');
            if (!backToTopButton) return;
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
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
                initBackToTop();
                
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