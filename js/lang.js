const switchLangBtn = document.querySelector('.switch-lang');

// Elements to be updated when switching language:
const aboutLink = document.querySelector('.about');
const portfolioLink = document.querySelector('.portfolio');
const techStackLink = document.querySelector('.tech');
const contactLink = document.querySelector('.contact');
const headerTitle = document.querySelector('.header-title');
const aboutBtn = document.querySelector('.learn-more');

const updateElements = (data) => {
    aboutLink.innerText = data.about;
    portfolioLink.innerText = data.portfolio;
    techStackLink.innerText = data.tech_stack;
    contactLink.innerText = data.contact;
    headerTitle.innerText = data.header_title;
    aboutBtn.innerText = data.about_btn;
}

const getData = (directory) => {
    fetch(directory)
        .then(res => res.json())
        .then(data => updateElements(data))
        .catch(error => console.log(error))
}

const switchLanguage = () => {

    switchLangBtn.innerText === 'EN - PL' ? switchLangBtn.innerText = 'PL - EN' : switchLangBtn.innerText = 'EN - PL';

    if (switchLangBtn.innerText === 'PL - EN') {
        getData('./languages/pl.json');
    } else {
        getData('./languages/en.json');
    }
    

}


switchLangBtn.addEventListener('click',switchLanguage);