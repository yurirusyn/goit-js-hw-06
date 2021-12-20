const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

    let ingredientList = ingredients.map(option => {
    const titleEl = document.createElement('li');
    titleEl.classList.add('item');
    titleEl.textContent = option;

    return titleEl;
  });


const elements = document.querySelector('#ingredients')
elements.append(...ingredientList)
