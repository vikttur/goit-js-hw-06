function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.getElementById('controls');
const numberOfElementsRef = controlsRef.querySelector('input');
const createElementsRef = controlsRef.querySelector('button[data-create]');
const destroyElementsRef = controlsRef.querySelector('button[data-destroy]');
const mainBoxRef = document.getElementById('boxes');

const createBoxes = amount => {
	const childrenOfBox = [];

	for (let i = 0; i < amount; i += 1) {
		const newDivRef = document.createElement('div');
		newDivRef.style.width = `${30 + i * 10}px`;
		newDivRef.style.height = `${30 + i * 10}px`;
		newDivRef.style.backgroundColor = getRandomHexColor();
		childrenOfBox.push(newDivRef);
	};

	mainBoxRef.append(...childrenOfBox);
};

const destroyBoxes = () => {
	mainBoxRef.remove(mainBoxRef.children);
};

createElementsRef.addEventListener('click', () => createBoxes(Number(numberOfElementsRef.value)));
destroyElementsRef.addEventListener('click', () => destroyBoxes());
