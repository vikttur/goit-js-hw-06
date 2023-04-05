const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if ((email.value.trim() === '') || (password.value.trim() === '')) {
		alert('Fill in the fields of the form');
		return;
	};

	const dataFromForm = {
		email: email.value.trim(),
		password:password.value.trim(),
	}

	console.table(dataFromForm);
	form.reset();
};
