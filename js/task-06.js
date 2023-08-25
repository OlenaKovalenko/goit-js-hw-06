const inputSymbols = document.querySelector('#validation-input');

inputSymbols.addEventListener('blur', () => {
    
    if (inputSymbols.value.length == inputSymbols.dataset.length) {
        inputSymbols.classList.add("valid");
    } else {
        inputSymbols.classList.add("invalid");
    }
})