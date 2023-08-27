const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSize.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputValue = event.currentTarget.value;

    text.style.fontSize = `${inputValue}px`;
        
}