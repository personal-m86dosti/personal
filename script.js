

// Code for toggling menu
const nav = document.querySelector('nav');
const menu = document.querySelector('ul');

nav.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Code for dark mode toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
