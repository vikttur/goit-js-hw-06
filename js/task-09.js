function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btnChangeColorRef = document.querySelector('.change-color');
const colorDisplayFieldRef = document.querySelector('.color');

btnChangeColorRef.addEventListener('click', onBtnClick);

function onBtnClick() {
	const randomColor = getRandomHexColor();
	document.body.style.backgroundColor = randomColor;
	colorDisplayFieldRef.textContent = randomColor;
};