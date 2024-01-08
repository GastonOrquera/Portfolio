document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.scroll-reveal1', {
        origin: 'bottom',
        distance: '40px',
        duration: 1200,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200
    });
    ScrollReveal().reveal('.scroll-reveal2', {
        origin: 'left',
        distance: '40px',
        duration: 1400,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200
    });
});