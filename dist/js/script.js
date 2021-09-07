const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    links = document.querySelectorAll('.menu__link a'),
    form = document.querySelector('.contacts__form');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();

links.forEach((elem) => {
    elem.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.append('Sending mail currently doesn`t work')
})