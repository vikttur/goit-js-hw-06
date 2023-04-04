const inputSliderRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

const onSliderInput = event => 
	textRef.style.fontSize = `${event.currentTarget.value}px`;

inputSliderRef.addEventListener('input', onSliderInput);