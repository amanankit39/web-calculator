function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value.length > 0) {
        const lastChar = display.value[display.value.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.value = display.value.slice(0, -1);
        }
    }
    display.value += operator;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
