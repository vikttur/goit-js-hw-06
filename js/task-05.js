const textInputFieldRef = document.getElementById('name-input');
const elementForTextOutputRef = document.getElementById('name-output');

const onInputInput = (element,text) =>
	element.textContent = text.length > 0 ? text: 'Anonymous';

textInputFieldRef.addEventListener('input', () =>
	onInputInput(elementForTextOutputRef, event.currentTarget.value));