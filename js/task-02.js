const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredientName) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredientName;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
