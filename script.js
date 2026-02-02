// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.minimal-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show confirmation
            alert('Thank you! I will contact you shortly to confirm your appointment.');
            
            // Reset form
            form.reset();
            
            /* 
            TO CONNECT TO REAL EMAIL:
            - Use EmailJS (free service)
            - Use Formspree
            - Or build backend with Node.js
            */
        });
    }
});
