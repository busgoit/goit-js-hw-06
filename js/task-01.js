const categoriesList = document.querySelector('#categories');
const childrensOfCategoriesList = categoriesList.children;
const numberOfCategories = childrensOfCategoriesList.length;

console.log('Number of categories:', numberOfCategories);

for (const children of childrensOfCategoriesList) {
  const category = children.querySelector('h2');
  const categoryName = category.textContent;

  const childrenList = children.querySelector('ul');
  const categoriesOfChildrenList = childrenList.children;
  const numberOfItemsInCategory = categoriesOfChildrenList.length;

  console.log('Category:', categoryName);
  console.log('Elements:', numberOfItemsInCategory);
}
