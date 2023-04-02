const textInputFieldRef = document.getElementById('name-input');
const elementForTextOutputRef = document.getElementById('name-output');

const textToDisplay = (element,text) =>
	element.textContent = text.length > 0 ? text: 'Anonymous';

textInputFieldRef.addEventListener('input', () =>
	textToDisplay(elementForTextOutputRef, textInputFieldRef.value));