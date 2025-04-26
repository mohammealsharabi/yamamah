<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وجهات سفر موصى بها</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #3b82f6;
            --secondary-color: #1d4ed8;
            --accent-color: #f59e0b;
            --text-color: #1f2937;
            --light-bg: #f3f4f6;
            --gradient: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Tajawal', sans-serif;
            background-color: var(--light-bg);
            color: var(--text-color);
            line-height: 1.6;
        }

        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .navbar.scrolled {
            padding: 0.5rem 2rem;
            background: rgba(255, 255, 255, 0.98);
        }

        .navbar-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--primary-color);
            text-decoration: none;
            position: relative;
        }

        .logo::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .logo:hover::after {
            transform: scaleX(1);
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .nav-links a:hover::after {
            transform: scaleX(1);
        }

        .hero {
            background: var(--gradient);
            color: white;
            padding: 12rem 2rem 6rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
            opacity: 0.1;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 900;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 1s ease;
        }

        .hero p {
            font-size: 1.3rem;
            max-width: 600px;
            margin: 0 auto 2rem;
            animation: fadeInUp 1s ease 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        .search-bar {
            max-width: 600px;
            margin: 2rem auto;
            position: relative;
            animation: fadeInUp 1s ease 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        .search-bar input {
            width: 100%;
            padding: 1.2rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .search-bar input:focus {
            outline: none;
            box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
        }

        .search-bar button {
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            background: var(--accent-color);
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            color: white;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .search-bar button:hover {
            background: #e67e22;
            transform: translateY(-50%) scale(1.05);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .section-title {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-title h2 {
            font-size: 2.8rem;
            color: var(--text-color);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--gradient);
            border-radius: 2px;
        }

        .section-title p {
            color: #666;
            font-size: 1.2rem;
        }

        .destinations {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
        }

        .destination-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            position: relative;
        }

        .destination-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .destination-image {
            width: 100%;
            height: 280px;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .destination-card:hover .destination-image {
            transform: scale(1.1);
        }

        .destination-info {
            padding: 2rem;
            position: relative;
            background: white;
        }

        .destination-title {
            font-size: 1.8rem;
            color: var(--text-color);
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .destination-description {
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }

        .destination-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--primary-color);
            font-weight: 600;
        }

        .destination-meta i {
            margin-left: 0.5rem;
            font-size: 1.1rem;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2.5rem;
            margin-top: 6rem;
        }

        .feature-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: var(--gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
            transform: scale(1.1);
        }

        .feature-title {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .feature-description {
            color: #666;
            line-height: 1.8;
        }

        footer {
            background: var(--text-color);
            color: white;
            padding: 5rem 2rem;
            margin-top: 6rem;
            position: relative;
            overflow: hidden;
        }

        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
            opacity: 0.05;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            position: relative;
        }

        .footer-section h3 {
            margin-bottom: 1.5rem;
            font-size: 1.4rem;
            font-weight: 700;
            position: relative;
            display: inline-block;
        }

        .footer-section h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--accent-color);
        }

        .footer-section p {
            color: #ccc;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 1rem;
        }

        .footer-section ul li a {
            color: #ccc;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .footer-section ul li a:hover {
            color: white;
            transform: translateX(-5px);
        }

        .social-links {
            display: flex;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .social-links a {
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .social-links a:hover {
            color: var(--accent-color);
            transform: translateY(-5px);
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

        @media (max-width: 768px) {
            .navbar-content {
                flex-direction: column;
                gap: 1rem;
            }

            .nav-links {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }

            .hero {
                padding: 10rem 1rem 4rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .section-title h2 {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-content">
            <a href="#" class="logo">اليمامة للسياحة</a>
            <div class="nav-links">
                <a href="#">الرئيسية</a>
                <a href="#">الوجهات</a>
                <a href="#">العروض</a>
                <a href="#">اتصل بنا</a>
            </div>
        </div>
    </nav>

    <section class="hero">
        <h1>اكتشف وجهات سفر رائعة</h1>
        <p>نقدم لك أفضل الوجهات السياحية مع تجربة سفر لا تُنسى</p>
        <div class="search-bar">
            <input type="text" placeholder="ابحث عن وجهة...">
            <button><i class="fas fa-search"></i> بحث</button>
        </div>
    </section>

    <div class="container">
        <div class="section-title">
            <h2>وجهاتنا المميزة</h2>
            <p>اكتشف مجموعة مختارة من أفضل الوجهات السياحية</p>
        </div>

        <div class="destinations">
            <div class="destination-card">
                <img src="https://images.unsplash.com/photo-1518182273956-0b171b6165de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="سقطرى" class="destination-image">
                <div class="destination-info">
                    <h3 class="destination-title">سقطرى</h3>
                    <p class="destination-description">سقطرى هي جزيرة ساحرة تُعرف باسم "الكويكب على الأرض" بفضل أشجارها المميزة والمناظر الطبيعية الاستثنائية.</p>
                    <div class="destination-meta">
                        <span><i class="fas fa-calendar"></i> نوفمبر - مارس</span>
                        <span><i class="fas fa-star"></i> 4.8</span>
                    </div>
                </div>
            </div>

            <div class="destination-card">
                <img src="https://images.unsplash.com/photo-1579548312712-66a2599f41d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="السعودية" class="destination-image">
                <div class="destination-info">
                    <h3 class="destination-title">السعودية</h3>
                    <p class="destination-description">السعودية هي دولة غنية بالتاريخ والثقافة، تتميز بالمناظر الصحراوية الخلابة والمدن العصرية.</p>
                    <div class="destination-meta">
                        <span><i class="fas fa-calendar"></i> أكتوبر - أبريل</span>
                        <span><i class="fas fa-star"></i> 4.9</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-map-marked-alt"></i>
                </div>
                <h3 class="feature-title">وجهات متنوعة</h3>
                <p class="feature-description">اكتشف مجموعة واسعة من الوجهات السياحية المميزة</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-hotel"></i>
                </div>
                <h3 class="feature-title">إقامة فاخرة</h3>
                <p class="feature-description">نقدم لك أفضل خيارات الإقامة في كل وجهة</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3 class="feature-title">دعم على مدار الساعة</h3>
                <p class="feature-description">فريق دعم متاح لمساعدتك في أي وقت</p>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>عن اليمامة</h3>
                <p>نقدم أفضل خدمات السفر والسياحة مع ضمان تجربة لا تُنسى</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>روابط سريعة</h3>
                <ul>
                    <li><a href="#">الرئيسية</a></li>
                    <li><a href="#">الوجهات</a></li>
                    <li><a href="#">العروض</a></li>
                    <li><a href="#">اتصل بنا</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>اتصل بنا</h3>
                <ul>
                    <li><i class="fas fa-phone"></i> +966 123 456 789</li>
                    <li><i class="fas fa-envelope"></i> info@al-yamama.com</li>
                    <li><i class="fas fa-map-marker-alt"></i> الرياض، المملكة العربية السعودية</li>
                </ul>
            </div>
        </div>
    </footer>
</body>
</html>