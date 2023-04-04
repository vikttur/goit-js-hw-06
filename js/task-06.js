const textEntryFieldRef = document.getElementById('validation-input');

const onInputBlur = event => {
	const target = event.currentTarget;
	target.classList.remove('valid', 'invalid');
	target.classList.add(target.value.length === Number(target.dataset.length) ? 'valid' : 'invalid');
};

textEntryFieldRef.addEventListener('blur', onInputBlur);

// При перевірці ДЗ прошу залишити коментарій по такому питанню:
// Можна
// target.value.length == target.dataset.length
// Довжина текста - завжди число, data-length не може бути логічним значенням чи помилкою...
// тому, як на мене, в цьому конкретному випадку нестроге порівняння з приведенням типів непогано підходить - 
// не треба явно перетворювати текст на число