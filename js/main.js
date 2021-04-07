const burger = document.querySelector('.header__close'),
    menu = document.querySelector('.header__menu'),
    list = document.querySelector('.header__list'),
    body = document.getElementsByTagName('body')[0];

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    list.classList.toggle('active');
    body.classList.toggle('luck');
})

const btnSubmit = document.querySelector('.submit-link'),
    formAuto = document.querySelector('.form__auto');

btnSubmit.addEventListener('click', () => {
    formAuto.classList.toggle('hidden');
    body.classList.toggle('luck');
})