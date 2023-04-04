const textEntryFieldRef = document.getElementById('validation-input');

const onInputBlur = event => {
	const target = event.currentTarget;
	target.classList.remove('valid', 'invalid');
	target.classList.add(target.value.length === Number(target.dataset.length) ? 'valid' : 'invalid');
};

textEntryFieldRef.addEventListener('blur', onInputBlur);
