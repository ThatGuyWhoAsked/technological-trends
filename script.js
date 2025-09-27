document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('interactive-bg');
    if (bg) {
        bg.style.setProperty('--mouse-x', `${e.clientX}px`);
        bg.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
});