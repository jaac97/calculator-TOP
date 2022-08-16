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

/*
    Cuando una operacion es solicitada se almacena lo que esta en pantalla en n1, se guarda el operador y se guarda n2 cuando se pulsa para ejecutar otra operacion
    Si el boton presionado es "=" entonces, operator se vuelve undefined despues de pulsar un nuevo numero
    Si el operator es undefined se muestran los datos que serán almacenados en la primera variable
*/
function getNumber(number) {
    const display = document.querySelector('.calculator__display');
    if (number !== "AC" && number !== "+/-" && /*number !== "%" &&*/ number !== "/" && number !== "*" && number !== "+" && number !== "-" && number !== "=") {
        if (operator === undefined) {
            if (number === "%" && display.textContent !== '') {
                let percent = parseFloat(display.textContent) / 100
                display.textContent = percent;
                return
            }
            if (number !== "%") {
                display.textContent += number
            }

        } else {
            console.log(operator)
            if (operator === '=') {
                display.textContent = number
                operator = undefined;
                return;
            }
            if (n2 === undefined) {
                console.log(number)
                if (number === "%" && display.textContent !== '') {
                    return
                }
                display.textContent = number;
                n2 = number
            } else {
                if (number === "%" && display.textContent !== '') {
                    let percent = parseFloat(display.textContent) / 100
                    display.textContent = percent;
                    n2 = percent;
                    return
                }
                n2 += number;
                display.textContent = n2;
                // console.log(n1, n2, operator)
            }

        }
    } else {
        if (number === "AC") {
            n1 = undefined;
            n2 = undefined;
            operator = undefined;
            display.textContent = '';
            return
        }
        if (display.textContent === '') {
            return;
        }
        if (number === '%') {

        }

        if (operator !== undefined) {

            if (number === '=') {
                let result = operations(n1, n2, operator);
                result = round(result)
                display.textContent = result
                n1 = undefined;
                n2 = undefined;
                operator = number;
                return;
            }
            n1 = operations(n1, n2, operator);
            n1 = round(n1)
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

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function operations(n1, n2, op) {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    let result;
    if (operator === '+') {
        result = n1 + n2
    } else if (operator === '-') {
        result = n1 - n2

    } else if (operator === '*') {
        result = n1 * n2

    } else if (operator === '/') {
        if (n2 == 0) {
            result = 'XD'
        }
        result = n1 / n2
    }
    return result
}
events()