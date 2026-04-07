document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                // If it's a dropdown toggle on mobile, don't close immediately unless it's the link itself
                if (window.innerWidth <= 1024 && link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown-menu')) {
                     // Provide prevent default for top level items if we want accordions, 
                     // but here they are links too, so maybe we just let them navigate if they have href.
                     // A common pattern is click to open dropdown, double click or icon click to navigate.
                     // For simplicity, let's keep default behavior but if we want accordion style:
                     // e.preventDefault();
                     // link.parentElement.classList.toggle('active');
                } else {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }
});
