const sandwich = document.querySelector('.sandwich');
const menu = document.querySelector('nav');
const main = document.querySelector('main');
const close = document.querySelector('.close');

sandwich.addEventListener('click', (e) => {
    menu.style.display = 'flex';
    main.style.display = 'none';
});

close.addEventListener('click', (e) => {
    menu.style.display = 'none';
    main.style.display = 'flex';
});
