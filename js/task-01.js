const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categoris: ${categoriesList.length}`);
const firstCategotiesItem = categoriesList.firstElementChild;
const lastCategoriesItem = categoriesList.lastElementChild;
const listItem = categoriesList.children;
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
