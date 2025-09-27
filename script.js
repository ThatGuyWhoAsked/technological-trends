document.addEventListener('DOMContentLoaded', () => {
    // Check for required elements
    const cursorGlow = document.getElementById('cursor-glow');
    const interactiveBg = document.getElementById('interactive-bg');
    
    // Exit if required elements are missing
    if (!cursorGlow || !interactiveBg) {
        console.warn('Required elements for cursor effects not found');
        document.body.style.cursor = 'auto'; // Restore default cursor
        return;
    }

    // Throttle mousemove events for better performance
    let lastMove = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e) => {
        const now = Date.now();
        if (now - lastMove < throttleDelay) return;
        lastMove = now;

        requestAnimationFrame(() => {
            try {
                const { clientX, clientY } = e;
                cursorGlow.style.transform = `translate(${clientX}px, ${clientY}px)`;
                
                interactiveBg.style.setProperty('--mouse-x', `${clientX}px`);
                interactiveBg.style.setProperty('--mouse-y', `${clientY}px`);
            } catch (error) {
                console.error('Error in mousemove handler:', error);
                document.removeEventListener('mousemove', handleMouseMove);
            }
        });
    };

    // Add event listener with passive: true for better scrolling performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Add hover effect for interactive elements with event delegation
    const handleHover = (e) => {
        const target = e.target.closest('a, button, .btn');
        if (!target) return;
        
        if (e.type === 'mouseenter' || e.type === 'focus') {
            cursorGlow.classList.add('hover');
        } else if (e.type === 'mouseleave' || e.type === 'blur') {
            cursorGlow.classList.remove('hover');
        }
    };

    // Use event delegation for better performance
    document.body.addEventListener('mouseenter', handleHover, true);
    document.body.addEventListener('mouseleave', handleHover, true);
    document.body.addEventListener('focusin', handleHover, true);
    document.body.addEventListener('focusout', handleHover, true);

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Apply saved theme preference
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('light-mode');
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            if (document.documentElement.classList.contains('light-mode')) {
                document.documentElement.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            } else {
                document.documentElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            }
        });
    }

    // Cleanup function
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseenter', handleHover, true);
        document.body.removeEventListener('mouseleave', handleHover, true);
        document.body.removeEventListener('focusin', handleHover, true);
        document.body.removeEventListener('focusout', handleHover, true);
    };
});
