
// Mobile navigation show and hide mechanism
const navBar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');

const navOpen = () => {
    navBar.style.right = '0';
}

const navClose = () => {
    navBar.style.right = '-100%';
}

menuIcon.addEventListener('click', (e) => {

    e.target.classList.toggle('fa-times');
    
    e.target.classList.contains('fa-times') ? navOpen() : navClose();

});

// Nav color change when scrolling
const mainNav = document.querySelector('.main-nav');

window.onscroll = () => {

    window.scrollY > 200 ? mainNav.classList.add('nav-bg-primary') : mainNav.classList.remove('nav-bg-primary');
    
}


