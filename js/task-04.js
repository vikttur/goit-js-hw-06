const decrementButtonRef = document.querySelector('button[data-action=decrement]');
const incrementButtonRef = document.querySelector('button[data-action=increment]');
const counterValueFieldRef = document.getElementById('value');
let counterValue = 0;

			//=== variant1 ===
// decrementButtonRef.addEventListener('click', () => {
// 	counterValue -= 1;
// 	counterValueFieldRef.textContent = counterValue;
// });

// incrementButtonRef.addEventListener('click', () => {
// 	counterValue += 1;
// 	counterValueFieldRef.textContent= counterValue;
// });

			//=== variant2 ===
const changeInValue = value => {
	counterValue += value;
	counterValueFieldRef.textContent = counterValue;
};

decrementButtonRef.addEventListener('click', () => changeInValue(-1));
incrementButtonRef.addEventListener('click', () => changeInValue(1));

			//=== variant3 ===
// const valueToSubtract = Number.parseFloat(decrementButtonRef.textContent);
// const valueToAdd = Number.parseFloat(incrementButtonRef.textContent);

// const changeInValue = value => {
// 	counterValue += value;
// 	counterValueFieldRef.textContent = counterValue;
// };

// decrementButtonRef.addEventListener('click', () => changeInValue(valueToSubtract));
// incrementButtonRef.addEventListener('click', () => changeInValue(valueToAdd));
