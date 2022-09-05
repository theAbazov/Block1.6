const burger = document.getElementById('burger')
const overlay = document.getElementById('overlay')
const openBurger = document.getElementById('burger-open')
const closeBurger = document.getElementById('burger-close')
const body = document.body


openBurger.addEventListener('click', () => {
    burger.classList.add('burger-show')
    overlay.style.display = 'block'
    body.classList.add('stop-scroll')
})

closeBurger.addEventListener('click', () => {
    burger.classList.remove('burger-show')
    overlay.style.display = 'none'
    body.classList.remove('stop-scroll')

})

overlay.addEventListener('click', () => {
    burger.classList.remove('burger-show')
    overlay.style.display = 'none'
    body.classList.remove('stop-scroll')

})