const listCategoriesRef = document.getElementById('categories');
const categoriesRef = listCategoriesRef.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
	console.log('');
	console.log(`Category: ${category.querySelector('h2').textContent}`);
	console.log(`Elements: ${category.querySelectorAll('li').length}`);
});