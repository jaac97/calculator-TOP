function events() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation()
        getNumber(e.target.textContent)
    }))
}

function getNumber (number) {
    const display = document.querySelector('.calculator__display');
    display.textContent += number
}
events()