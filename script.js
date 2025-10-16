// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '24px';
        navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (supports various US formats)
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

// Validation functions
function validateEmail(email) {
    return emailRegex.test(email);
}

function validatePhone(phone) {
    return phoneRegex.test(phone);
}

function validateRequired(value) {
    return value.trim() !== '';
}

// Show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');

    input.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Clear error message
function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');

    input.classList.remove('error');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

// Validate individual field
function validateField(input) {
    const value = input.value;
    const name = input.name;
    let isValid = true;

    clearError(input);

    switch (name) {
        case 'name':
            if (!validateRequired(value)) {
                showError(input, 'Please enter your full name');
                isValid = false;
            } else if (value.trim().length < 2) {
                showError(input, 'Name must be at least 2 characters');
                isValid = false;
            }
            break;

        case 'email':
            if (!validateRequired(value)) {
                showError(input, 'Please enter your email address');
                isValid = false;
            } else if (!validateEmail(value)) {
                showError(input, 'Please enter a valid email address');
                isValid = false;
            }
            break;

        case 'phone':
            if (!validateRequired(value)) {
                showError(input, 'Please enter your phone number');
                isValid = false;
            } else if (!validatePhone(value)) {
                showError(input, 'Please enter a valid phone number');
                isValid = false;
            }
            break;

        case 'company':
            if (!validateRequired(value)) {
                showError(input, 'Please enter your company name');
                isValid = false;
            }
            break;

        case 'fleet-size':
            if (!validateRequired(value)) {
                showError(input, 'Please select your fleet size');
                isValid = false;
            }
            break;

        case 'service':
            if (!validateRequired(value)) {
                showError(input, 'Please select a service');
                isValid = false;
            }
            break;
    }

    return isValid;
}

// Real-time validation on input
const formInputs = contactForm.querySelectorAll('input[required], select[required]');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;

    // Validate all required fields
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            fleetSize: document.getElementById('fleet-size').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Get Google Form URL from data attribute
        const googleFormUrl = contactForm.getAttribute('data-google-form-url');

        if (googleFormUrl && googleFormUrl.trim() !== '') {
            // Send to Google Forms
            sendToGoogleForms(formData, googleFormUrl);
        } else {
            // If no Google Form URL is set, just show success
            console.log('Form submitted (Google Form not configured yet):', formData);
            showSuccessMessage();
        }
    } else {
        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Function to send data to Google Forms
function sendToGoogleForms(formData, googleFormUrl) {
    // Create form data object for Google Forms
    const formDataObj = new FormData();

    // Map your form fields to Google Form entry IDs
    // You'll need to replace these entry IDs with your actual Google Form field IDs
    formDataObj.append('entry.NAME_ENTRY_ID', formData.name);
    formDataObj.append('entry.EMAIL_ENTRY_ID', formData.email);
    formDataObj.append('entry.PHONE_ENTRY_ID', formData.phone);
    formDataObj.append('entry.COMPANY_ENTRY_ID', formData.company);
    formDataObj.append('entry.FLEET_ENTRY_ID', formData.fleetSize);
    formDataObj.append('entry.SERVICE_ENTRY_ID', formData.service);
    formDataObj.append('entry.MESSAGE_ENTRY_ID', formData.message);

    // Send to Google Forms
    fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
    })
    .then(() => {
        showSuccessMessage();
    })
    .catch((error) => {
        console.error('Error submitting form:', error);
        showSuccessMessage(); // Still show success even if there's an error (no-cors limitation)
    });
}

// Function to show success message
function showSuccessMessage() {
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    formSuccess.scrollIntoView({ behavior: 'smooth' });
}

// Function to send form data to server (implement as needed)
function sendFormData(data) {
    // Example using fetch API
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to service cards, pricing cards, and testimonials
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .pricing-card, .testimonial-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add active state to navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Chart bar animation on hover
const chartBars = document.querySelectorAll('.chart-bar');
chartBars.forEach(bar => {
    const originalHeight = bar.style.height;

    bar.addEventListener('mouseenter', () => {
        bar.style.height = `${parseInt(originalHeight) + 5}%`;
    });

    bar.addEventListener('mouseleave', () => {
        bar.style.height = originalHeight;
    });
});

// Add loading animation to buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') {
            return; // Let form handle submit buttons
        }

        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.dataset.animated) {
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');

                statNumber.dataset.animated = 'true';
                statNumber.textContent = '0' + suffix;

                setTimeout(() => {
                    animateCounter(statNumber, number);
                }, 200);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Format phone number as user types
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }

        e.target.value = value;
    });
}

// Experts Carousel Touch Support
const expertsCarousel = document.querySelector('.experts-carousel');

if (expertsCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let animationPaused = false;

    // Mouse events
    expertsCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        expertsCarousel.style.cursor = 'grabbing';
        startX = e.pageX - expertsCarousel.offsetLeft;
        scrollLeft = expertsCarousel.scrollLeft;

        // Pause animation
        if (!animationPaused) {
            expertsCarousel.style.animationPlayState = 'paused';
            animationPaused = true;
        }
    });

    expertsCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        expertsCarousel.style.cursor = 'grab';
    });

    expertsCarousel.addEventListener('mouseup', () => {
        isDown = false;
        expertsCarousel.style.cursor = 'grab';
    });

    expertsCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - expertsCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        expertsCarousel.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    expertsCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;

        // Pause animation on touch
        if (!animationPaused) {
            expertsCarousel.style.animationPlayState = 'paused';
            animationPaused = true;
        }
    }, { passive: true });

    expertsCarousel.addEventListener('touchmove', (e) => {
        touchEndX = e.changedTouches[0].screenX;
    }, { passive: true });

    expertsCarousel.addEventListener('touchend', () => {
        // Resume animation after a delay
        setTimeout(() => {
            expertsCarousel.style.animationPlayState = 'running';
            animationPaused = false;
        }, 3000);
    });

    // Resume animation on mouse leave after pause
    expertsCarousel.addEventListener('mouseleave', () => {
        if (animationPaused && !isDown) {
            setTimeout(() => {
                expertsCarousel.style.animationPlayState = 'running';
                animationPaused = false;
            }, 2000);
        }
    });
}

// Console log for debugging
console.log('TruckBooks Pro website loaded successfully');
console.log('Form validation active');
console.log('All animations initialized');
console.log('Experts carousel with touch support ready');
