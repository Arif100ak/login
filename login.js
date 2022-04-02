const open = document.getElementById('open')
const close = document.getElementById('close')

const navMenu = document.getElementById('side-nav')


if (open) {
    open.addEventListener('click', () => {
        navMenu.classList.add("show")
    })

}
if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove("show")
    })
}
