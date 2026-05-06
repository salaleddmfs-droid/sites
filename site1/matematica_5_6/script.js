document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show selected page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });
        });
    });

    // Question toggles
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questionDiv = this.parentElement;
            const answer = questionDiv.querySelector('.answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            // Change button text
            this.textContent = answer.style.display === 'block' ? 'Esconder resposta' : 'Mostrar resposta';
        });
    });

    // Set initial active page (inicio)
    document.getElementById('inicio').classList.add('active');
    document.querySelector('nav a[href="#inicio"]').classList.add('active');
});