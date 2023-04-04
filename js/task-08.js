const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if ((email.value === '') || (password.value === '')) {
		alert('Fill in the fields of the form');
		return;
	};

	const dataFromForm = {
		email: email.value,
		password:password.value,
	}

	console.table(dataFromForm);
	form.reset();
};
