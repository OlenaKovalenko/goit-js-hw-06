const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.getAttribute('style').split(":").splice(1, 1).join('').slice(0, -1);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

