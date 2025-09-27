document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.getElementById('cursor-glow');
    const interactiveBg = document.getElementById('interactive-bg');

    if (!cursorGlow || !interactiveBg) return;

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        cursorGlow.style.left = `${clientX}px`;
        cursorGlow.style.top = `${clientY}px`;

        interactiveBg.style.setProperty('--mouse-x', `${clientX}px`);
        interactiveBg.style.setProperty('--mouse-y', `${clientY}px`);
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