document.querySelector('.nav__toggle').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
    document.querySelector('.nav').classList.toggle('nav--mobile')
}