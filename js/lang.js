export  { language }

document.querySelector('body').onload = () => {
    getData('./languages/en.json')
}

let language = "EN";

// Elements to be updated when switching language:

// Nav + header
const aboutLink = document.querySelector('.about');
const portfolioLink = document.querySelector('.portfolio');
const techStackLink = document.querySelector('.tech');
const contactLink = document.querySelector('.contact');
const headerTitle = document.querySelector('.header-title');
const headerBtn = document.querySelector('.learn-more');

// Section headers
const aboutHeader = document.querySelector('.about-header');
const portfolioHeader = document.querySelector('.projects-header');
const techHeader = document.querySelector('.tech-stack-header');
const contactHeader = document.querySelector('.contact-header');

// Contact form labels
const nameLabel = document.querySelector('#name').previousElementSibling;
const emailLabel = document.querySelector('#email').previousElementSibling;
const phoneLabel = document.querySelector('#phone').previousElementSibling;
const messageLabel = document.querySelector('#message').previousElementSibling;
const formBtn = document.querySelector('.send-message');

const updateElements = (data) => {
    aboutLink.innerText = data.about;
    portfolioLink.innerText = data.portfolio;
    techStackLink.innerText = data.tech_stack;
    contactLink.innerText = data.contact;
    headerTitle.innerText = data.header_title;
    headerBtn.innerText = data.header_btn;
    aboutHeader.innerText = data.about_title;
    portfolioHeader.innerText = data.portfolio_title;
    techHeader.innerText = data.tech_title;
    contactHeader.innerText = data.contact_title;
    nameLabel.innerText = data.name_label;
    emailLabel.innerText = data.email_label;
    phoneLabel.innerText = data.phone_label;
    messageLabel.innerText = data.message_label;
    formBtn.innerHTML = data.form_btn;
}

const getData = (directory) => {
    fetch(directory)
        .then(res => res.json())
        .then(data => updateElements(data))
        .catch(error => console.log(error))
}

const switchLangBtn = document.querySelector('.switch-lang');

const switchLanguage = () => {

    language === 'EN' ? switchLangBtn.innerText = 'PL - EN' : switchLangBtn.innerText = 'EN - PL';

    if (language === 'EN') {
        language = 'PL';
        getData('./languages/pl.json');
    } else {
        language = 'EN';
        getData('./languages/en.json');
    }

}

switchLangBtn.addEventListener('click',switchLanguage);