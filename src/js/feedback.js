const feedback = document.getElementById('feedback')
const feedbackOpen = document.querySelectorAll('#feedback-open')
const feedbackClose = document.querySelectorAll('#feedback-close')
const body = document.body


feedbackOpen.forEach((open) => {
    open.addEventListener('click', () => {
        feedback.classList.add('feedback-show')
        overlay.style.display = 'block'
        body.classList.add('stop-scroll')
        // ===================
        burger.classList.remove('burger-show')
    })
})


feedbackClose.forEach((close) => {
    close.addEventListener('click', () => {
        feedback.classList.remove('feedback-show')
        body.classList.remove('stop-scroll')
        overlay.style.display = 'none'
    })
    
})

overlay.addEventListener('click', () => {
    feedback.classList.remove('feedback-show')
    body.classList.remove('stop-scroll')
    overlay.style.display = 'none'
})