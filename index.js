function openMenu() {
    document.body.classList += " menu--open"
    document.body.classList.remove('menu--closed')  /* agregar un espacio antes de poner el nombre de una clase es good practice*/
}

function closeMenu() {
    document.body.classList.remove('menu--open')
    document.body.classList += " menu--closed"
}


function leftClick() {
    document.body.classList += " view--testimonial-1"
    document.body.classList.remove('view--testimonial-2')
}

function rightClick() {
    document.body.classList += " view--testimonial-2"
    document.body.classList.remove('view--testimonial-1')
}

var element = document.getElementsByClassName('view--testimonial-1');
var element2 = document.getElementsByClassName('view--testimonial-2');

function Clicks() {
    if(element.length > 0){
    rightClick();
    } else if(element2.lenght > 0){
    rightClick();
    } else {
    leftClick();
    }
}