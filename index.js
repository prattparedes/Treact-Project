function openMenu() {
    document.body.classList += " menu--open"  /* agregar un espacio antes de poner el nombre de una clase es good practice*/
}

function closeMenu() {
    document.body.classList.remove('menu--open')

}

function leftClick() {
    document.body.classList += " view--testimonial-1"
    document.body.classList.remove('view--testimonial-2')
}

function rightClick() {
    document.body.classList += " view--testimonial-2"
    document.body.classList.remove('view--testimonial-1')
}