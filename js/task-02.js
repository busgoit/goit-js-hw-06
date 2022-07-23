const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = [];

const ingredientsList = document.getElementById('ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement('li');
  element.textContent = `${ingredients[i]}`;
  element.classList.add('item');
  elements.push(element);
}

ingredientsList.append(...elements);
