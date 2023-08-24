let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const currentValue = document.querySelector('#value');

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;      
});

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
});


