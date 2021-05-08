const openPopUpBtn = document.querySelectorAll('[data-modal-target]')
const closePopUpBtn = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const menuButton = document.getElementById('menuBtn')

openPopUpBtn.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.modalTarget)
        openPopUp(popup)
    })
})

function openPopUp(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

closePopUpBtn.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.pop-up')
        closePopUp(popup)
    })
})

function closePopUp(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const popup = document.querySelectorAll('.pop-up.active')
    popup.forEach(popup => {
        closePopUp(popup)
    })
})