import { language } from "./lang.js";

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

// Contact form
const form = document.querySelector('.contact-form');

const validate = (e) => {

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    const requiredFields = [name,email,message]

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let validationErrors = 0;
    
    if (!email.value.match(mailFormat)) {
        language === 'EN' ? email.nextElementSibling.innerText = "Invalid email" : email.nextElementSibling.innerText = "Nieprawidłowy adres e-mail";
        validationErrors += 1;
        email.classList.add('input-error');
    } 

    for (let el of requiredFields) {
        if (el.value.trim() === '') {
            validationErrors += 1;
            el.classList.add('input-error');
            language === 'EN' ? el.nextElementSibling.innerText = "Field can't be blank" : el.nextElementSibling.innerText = "Pole nie może być puste";
        } else if (el.value.length < 3) {
            validationErrors += 1;
            el.classList.add('input-error');
            language === 'EN' ? el.nextElementSibling.innerText = "Field value can't be shorter than 3 characters" : el.nextElementSibling.innerText = "Wprowadzona wartość musi mieć conajmniej 3 znaki";
        } 
    }

    validationErrors === 0 ? true : e.preventDefault();
}

form.addEventListener('submit',validate);


