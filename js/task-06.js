const textEntryFieldRef = document.getElementById('validation-input');

const onInputBlur = event => {
	const target = event.currentTarget;
	target.classList.remove('valid', 'invalid');
	target.classList.add(target.value.length == target.dataset.length ? 'valid' : 'invalid');
};

textEntryFieldRef.addEventListener('blur', onInputBlur);

// Можна
// target.value.length === Number(target.dataset.length)
// Але ж довжина текста - завжди число, data-length не може бути логічним значенням чи текстом
// тому, як на мене, в цьому конкретному випадку нестроге порівняння з приведенням типів краще підходить - 
// не треба явно перетворювати текст на число