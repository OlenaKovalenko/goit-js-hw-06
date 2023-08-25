const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {

    const inputValue = event.currentTarget.value;

    nameOutput.textContent = inputValue ? inputValue : "Anonymous";

}