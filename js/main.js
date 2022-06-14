const menuIcon = document.querySelector('.menu-icon');

const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click',function() {
    

    const menuIconInner = menuIcon.children[0]
    // Check if navbar by default is opened. 
    // If yes  - remove class open, add class close (show and hide animation), change icon from X to hamburger.
    // If not (else) - remove class close, add class open (show and hide animation), change icon from burger to X
    if (navBar.classList.contains('navbar-opened')) {
        navBar.classList.remove('navbar-opened');
        navBar.classList.add('navbar-closed');
        menuIconInner.classList.remove('fa-times');
        menuIconInner.classList.add('fa-bars');
    } else { 
        navBar.classList.remove('navbar-closed');
        navBar.classList.add('navbar-opened');
        menuIconInner.classList.remove('fa-bars');
        menuIconInner.classList.add('fa-times');
    }
});

