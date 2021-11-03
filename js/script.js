let openModal = document.querySelector(".modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")


// открыть модальное окно
openModal.addEventListener("click", function () {
    modal.style.display = "block"
})
// закрыть модальное  окно
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
})
// при нажатии любого места экрана class modal должен закрыться
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
}