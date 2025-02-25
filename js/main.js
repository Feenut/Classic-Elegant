document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Card animations on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.why-us-card, .testimonial');
        
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const isVisible = (cardTop < window.innerHeight - 100) && (cardBottom > 0);
            
            if (isVisible) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    };

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Mobile Menu Functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const closeNav = document.getElementById('closeNav');

    if (hamburgerBtn && mobileNav && closeNav) {
        function openMobileMenu(e) {
            e.preventDefault();
            hamburgerBtn.classList.add('active');
            mobileNav.style.display = 'block';
            document.body.classList.add('mobile-menu-open');
            requestAnimationFrame(() => {
                mobileNav.classList.add('active');
            });
        }

        function closeMobileMenu() {
            hamburgerBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
            setTimeout(() => {
                mobileNav.style.display = 'none';
            }, 300);
        }

        hamburgerBtn.addEventListener('click', openMobileMenu);
        closeNav.addEventListener('click', closeMobileMenu);

        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Section header hover effects
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('mouseenter', () => {
            header.style.transform = 'translateY(-5px)';
            header.style.transition = 'transform 0.3s ease';
        });
        
        header.addEventListener('mouseleave', () => {
            header.style.transform = 'translateY(0)';
        });
    });

    // Initialize all animations on page load
    animateOnScroll();

    // Premium Scroll Animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('reveal-text')) {
                    entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements with animations
    document.querySelectorAll('.reveal-text, .fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced hover effects
    document.querySelectorAll('.hover-effect').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Remove any existing hover effect listeners
    const hoverElements = document.querySelectorAll('.nav-links a, .cta-button, .learn-more, .service-card, .difference-card, .stat-box');
    
    hoverElements.forEach(element => {
        element.style.transition = 'color 0.3s ease';
    });

    // Remove mobile text selection highlight
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    
    mobileNavLinks.forEach(link => {
        link.style.webkitTapHighlightColor = 'transparent';
        link.style.WebkitTouchCallout = 'none';
        link.style.userSelect = 'none';
        
        // Remove hover/active state handlers
        link.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    });

    // Update the existing nav links code
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.style.webkitTapHighlightColor = 'transparent';
        link.style.WebkitTouchCallout = 'none';
        
        // Only apply color change on desktop
        if (window.matchMedia('(min-width: 769px)').matches) {
            link.addEventListener('mouseenter', function() {
                this.style.color = 'var(--accent-color)';
            });
            
            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.color = 'var(--primary-color)';
                }
            });
        }
    });
}); 