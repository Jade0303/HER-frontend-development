var hamburger = document.querySelector('.burger');
var navLinks = document.querySelector('.navigatie');

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('nav-active');
});