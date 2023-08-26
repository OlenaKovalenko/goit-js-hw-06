const inputSymbols = document.querySelector('#validation-input');

inputSymbols.addEventListener('blur', () => {
    
    if (inputSymbols.value.length == inputSymbols.dataset.length) {
        inputSymbols.classList.remove("invalid");
        inputSymbols.classList.add("valid");
    } else {
        inputSymbols.classList.remove("valid");
        inputSymbols.classList.add("invalid");
    }
})