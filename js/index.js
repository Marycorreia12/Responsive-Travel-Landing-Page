const menu = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', menuToggle);

function menuToggle(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav');
}