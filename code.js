const input = document.querySelector('#amount');
const button5 = document.querySelector('#button1');
const button10 = document.querySelector('#button2');
const button15 = document.querySelector('#button3');
const buttonOther = document.querySelector('#button4');
const inputOther = document.querySelector('#other');

function value(amount) {
    const value = input.value;
    alert(value * amount/100 );
    input.value = '';
}

button5.addEventListener('click', () => {value(5)});
button10.addEventListener('click', () => {value(10)});
button15.addEventListener('click', () => {value(15)});

buttonOther.addEventListener('click', () => {
    const inputValue = parseFloat(inputOther.value);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
        value(inputValue);
        inputOther.value = '';
    } else {
        alert('Please enter a valid number between 0 and 100.');
        inputOther.value = '';
    }
});
