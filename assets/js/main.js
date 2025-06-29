document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.cursor');

    if (glow) {
        // Move the custom cursor
        document.addEventListener('mousemove', (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Handle hover effect on links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                glow.classList.add('hovering-link');
            });
            link.addEventListener('mouseleave', () => {
                glow.classList.remove('hovering-link');
            });
        });
    }
});