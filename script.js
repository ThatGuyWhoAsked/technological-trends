document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.getElementById('cursor-glow');

    if (!cursorGlow) return;

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorGlow.classList.remove('hover');
        });
    });
});