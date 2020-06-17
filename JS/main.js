const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function(){
    sideMenu.classList.toggle('show');
})