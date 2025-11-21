const sandwich = document.querySelector('.sandwich');
const menu = document.querySelector('nav');
const close = document.querySelector('.close');

sandwich.addEventListener('click', (e) => {
    menu.style.display = 'flex';
});

close.addEventListener('click', (e) => {
    menu.style.display = 'none';
});
