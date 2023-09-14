const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const items = ingredients.map(ingridient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");
  return listItem
});

list.append(...items);