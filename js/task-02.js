const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsRef = document.getElementById('ingredients');

const creatingNewIngredient = ingredient => {
	const ingredientRef = document.createElement('li');
	ingredientRef.textContent = ingredient;
	ingredientRef.classList.add('item');
	return ingredientRef;
};

const newIngredients = ingredients.map(creatingNewIngredient);
listIngredientsRef.append(...newIngredients);