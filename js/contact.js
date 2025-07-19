document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission (in a real app, you would send this to your server)
            simulateFormSubmission(data)
                .then(response => {
                    showSuccessMessage();
                    contactForm.reset();
                })
                .catch(error => {
                    showErrorMessage();
                });
        });
    }
});

function validateForm() {
    const nameInput = document.querySelector('#contactForm input[name="name"]');
    const emailInput = document.querySelector('#contactForm input[name="email"]');
    const phoneInput = document.querySelector('#contactForm input[name="phone"]');
    const serviceInput = document.querySelector('#contactForm select[name="service"]');
    const messageInput = document.querySelector('#contactForm textarea[name="message"]');
    
    let isValid = true;
    
    // Reset error states
    document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
    
    // Validate name
    if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate phone
    if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate service
    if (!serviceInput.value) {
        serviceInput.classList.add('is-invalid');
        isValid = false;
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
}

function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // For demo purposes, we'll randomly succeed or fail
            const isSuccess = Math.random() > 0.2;
            
            if (isSuccess) {
                resolve({
                    status: 'success',
                    message: 'Form submitted successfully'
                });
            } else {
                reject({
                    status: 'error',
                    message: 'Failed to submit form'
                });
            }
        }, 1000);
    });
}

function showSuccessMessage() {
    Swal.fire({
        title: 'Thank You!',
        text: 'Your message has been sent successfully. We will contact you shortly.',
        icon: 'success',
        confirmButtonColor: '#2c5aa0'
    });
}

function showErrorMessage() {
    Swal.fire({
        title: 'Error',
        text: 'There was a problem submitting your form. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#2c5aa0'
    });
}