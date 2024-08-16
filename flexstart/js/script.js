function updateNavbarStyles() {
    const navbar = document.getElementById('navbar');
    const themeLink = document.getElementById('theme-link');
    const isLightTheme = themeLink.getAttribute('href').includes('light.css');

    if (isLightTheme) {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white');
            navbar.style.boxShadow = '0px 0px 15px #ddd';
        } else {
            navbar.classList.remove('bg-white');
            navbar.style.boxShadow = 'none';
        }
    } else {
        // Dark mode styles
        navbar.classList.remove('bg-white');
        navbar.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', updateNavbarStyles);

document.getElementById('pageMode').onclick = function() {
    const themeLink = document.getElementById('theme-link');
    const currentTheme = themeLink.getAttribute('href');
    const newTheme = currentTheme.includes('dark.css') ? 'light.css' : 'dark.css';
    themeLink.setAttribute('href', 'css/' + newTheme);
    updateNavbarStyles();
};
// Initial check to apply styles based on the current theme
updateNavbarStyles();


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-list');
    const images = document.querySelectorAll('.images-gallery .col-4');

    function filterImages(category) {
        images.forEach(image => {
            image.classList.remove('show');
            if (category === 'all' || image.classList.contains(category)) {
                image.classList.add('show');
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default action of the anchor tag

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.id;
            filterImages(category);
        });
    });

    // Show all images by default
    filterImages('all');
});
localStorage.setItem('theme','dark')
console.log(localStorage.theme)

