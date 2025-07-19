document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });

    // Load features
    loadFeatures();
    
    // Load testimonials
    loadTestimonials();
    
    // Load FAQ
    loadFAQ();
    
    // Initialize contact form
    initContactForm();
});

function loadFeatures() {
    const features = [
        {
            icon: 'fas fa-shield-alt',
            title: 'Safe & Secure',
            description: 'All vehicles are regularly serviced and maintained for your safety.'
        },
        {
            icon: 'fas fa-magic',
            title: 'Clean Cars',
            description: 'Every vehicle is thoroughly cleaned and sanitized before each rental.'
        },
        {
            icon: 'fas fa-user-friends',
            title: 'Friendly Drivers',
            description: 'Our experienced and courteous drivers ensure a pleasant journey.'
        },
        {
            icon: 'fas fa-wallet',
            title: 'Affordable Prices',
            description: 'Competitive rates with no hidden charges. Best value for money.'
        },
        {
            icon: 'fas fa-clock',
            title: '24/7 Availability',
            description: 'We are available round the clock for your travel needs.'
        },
        {
            icon: 'fas fa-route',
            title: 'Local Expertise',
            description: 'Our drivers know the best routes and can provide travel advice.'
        },
        {
            icon: 'fas fa-car-side',
            title: 'Wide Selection',
            description: 'Choose from our diverse fleet of well-maintained vehicles.'
        },
        {
            icon: 'fas fa-headset',
            title: 'Customer Support',
            description: 'Dedicated support team to assist you anytime.'
        }
    ];

    const featuresGrid = document.querySelector('.features-grid');
    
    if (featuresGrid) {
        featuresGrid.innerHTML = features.map(feature => `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }
}

function loadTestimonials() {
    const testimonials = [
        {
            content: "DriveEasy provided excellent service for our family vacation. The car was clean, comfortable, and the driver was very professional. Highly recommended!",
            author: "Rahul Sharma",
            role: "Family Vacation",
            image: "images/testimonial1.jpg"
        },
        {
            content: "I use DriveEasy for my business trips regularly. Their service is reliable and their fleet is well-maintained. The pricing is very competitive too.",
            author: "Priya Patel",
            role: "Business Traveler",
            image: "images/testimonial2.jpg"
        },
        {
            content: "The airport transfer service was seamless. The driver was on time and helped with luggage. Will definitely use DriveEasy again for my travels.",
            author: "Amit Kumar",
            role: "Frequent Flyer",
            image: "images/testimonial3.jpg"
        }
    ];

    const testimonialsSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialsSlider) {
        testimonialsSlider.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <p class="testimonial-content">${testimonial.content}</p>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.author}">
                    <div>
                        <h5>${testimonial.author}</h5>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Initialize testimonial slider
        if (typeof tns === 'function') {
            tns({
                container: '.testimonials-slider',
                items: 1,
                slideBy: 'page',
                autoplay: true,
                autoplayButtonOutput: false,
                controls: false,
                nav: true,
                speed: 500,
                autoplayTimeout: 5000,
                responsive: {
                    768: {
                        items: 2
                    }
                }
            });
        }
    }
}

function loadFAQ() {
    const faqs = [
        {
            question: "What documents do I need to rent a car?",
            answer: "You'll need a valid driver's license, proof of identity (Aadhaar card, passport, or PAN card), and a valid credit card for the security deposit."
        },
        {
            question: "What is your cancellation policy?",
            answer: "You can cancel your booking up to 24 hours before the scheduled pickup time for a full refund. Cancellations made within 24 hours may incur a small fee."
        },
        {
            question: "Do you provide chauffeur services?",
            answer: "Yes, we offer professional chauffeur services at an additional charge. Our drivers are experienced, courteous, and familiar with local routes."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit/debit cards, net banking, UPI payments, and cash payments at our office location."
        },
        {
            question: "Is there a mileage limit on rentals?",
            answer: "Our daily rentals include 200 km per day. Additional kilometers are charged at a nominal rate depending on the vehicle type."
        },
        {
            question: "Can I extend my rental period?",
            answer: "Yes, you can extend your rental period subject to vehicle availability. Please contact us at least 24 hours before your scheduled return time."
        }
    ];

    const faqAccordion = document.getElementById('faqAccordion');
    
    if (faqAccordion) {
        faqAccordion.innerHTML = faqs.map((faq, index) => `
            <div class="accordion-item">
                <h3 class="accordion-header" id="faqHeading${index}">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faqCollapse${index}">
                        ${faq.question}
                    </button>
                </h3>
                <div id="faqCollapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="faqHeading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to your server
            // For demo purposes, we'll just show a success message
            Swal.fire({
                title: 'Thank You!',
                text: 'Your message has been sent successfully. We will contact you shortly.',
                icon: 'success',
                confirmButtonColor: '#2c5aa0'
            });
            
            // Reset form
            contactForm.reset();
        });
    }
}