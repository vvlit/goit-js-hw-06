const categoriesList = document.querySelectorAll(".item");
const numberOfCategories = categoriesList.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});