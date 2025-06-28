document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.cursor-glow');

    if (glow) {
        document.addEventListener('mousemove', (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }
});