function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
btnCreateEl.addEventListener('click', getAmount);

const btnDestroyEl = document.querySelector("[data-destroy]");
btnDestroyEl.addEventListener('click', destroyBoxes);

const divBoxesEl = document.querySelector("#boxes");


function getAmount() {
  const amount = inputNumberEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {

let size = 30;
const arrayBoxes = [];

  for (let i = 0; i <= amount; i += 1) {
  
  const box = document.createElement("div");

  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  
  size += 10;
  arrayBoxes.push(box);
 }

divBoxesEl.append(...arrayBoxes);
}


function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  inputNumberEl.value = "";
}
