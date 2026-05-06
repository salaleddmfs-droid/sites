// Simple JavaScript for enhanced user experience
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation to facts when they enter viewport
    const facts = document.querySelectorAll('.fact');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new Observer((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    facts.forEach(fact => {
        fact.style.opacity = 0;
        fact.style.transform = 'translateY(20px)';
        fact.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(fact);
    });
    
    // Add a "back to top" button that appears when scrolling
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '&#8679;'; // Up arrow
    backToTopButton.title = 'Voltar ao topo';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.backgroundColor = '#4ca1af';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    backToTopButton.style.zIndex = '1000';
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    document.body.appendChild(backToTopButton);
});

// Fallback for browsers that don't support IntersectionObserver
if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fact').forEach(fact => {
        fact.style.opacity = 1;
        fact.style.transform = 'translateY(0)';
    });
}