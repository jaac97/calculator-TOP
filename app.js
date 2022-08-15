let n1;
let n2;
let operator;

function events() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation()
        getNumber(e.target.textContent)
    }))
}

function getNumber(number) {
    const display = document.querySelector('.calculator__display');
    if (number !== "AC" && number !== "+/-" && number !== "%" && number !== "/" &&
        number !== "*" && number !== "+" && number !== "-" && number !== "=") {
        if (operator === undefined) {
            display.textContent += number
        } else {
            if (n2 === undefined) {
                display.textContent = number;
                n2 = number
            } else {
                n2 += number;
                display.textContent = n2;
                // console.log(n1, n2, operator)
            }

        }
    } else {
        if (display.textContent === '') return;

        if (operator !== undefined) {
            n1 = operations(n1, n2, operator);
            n2 = undefined;
            display.textContent = n1;
            operator = number;
            console.log(operator)
            return;
        }
        operator = number;
        n1 = display.textContent;

        console.log(n1)
        console.log(operator)
    }
}

function operations(n1, n2, op) {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    if (operator === '+') {
        return n1 + n2
    } else if (operator === '-') {
        return n1 - n2

    } else if (operator === '*') {
        return n1 * n2

    } else if (operator === '/') {
        return n1 / n2
    }

}
events()