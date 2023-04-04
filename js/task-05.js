const textInputFieldRef = document.getElementById('name-input');
const elementForTextOutputRef = document.getElementById('name-output');

textInputFieldRef.addEventListener('input', onInputInput);

function onInputInput(event) {
	const text = event.currentTarget.value;
	// const text = event.currentTarget.value.trim();
	// з trim правильніше, але в завданні - "Якщо інпут порожній"
	elementForTextOutputRef.textContent = text.length > 0 ? text : 'Anonymous';
};