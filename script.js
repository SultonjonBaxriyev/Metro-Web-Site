const navbar = document.querySelector('.navbar')
const button = document.querySelector('.button')
button.addEventListener('click', ()=> {
    button.classList.toggle('show')
    navbar.classList.toggle('active')
})