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