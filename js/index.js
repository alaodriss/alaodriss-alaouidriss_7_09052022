// get all elements to create tag lists ingredients/appliance/ustensils
function getElementsInRecipes(recipes, elementToGet) {
  let list = [];
  let listreduced = [];
  switch (elementToGet) {case "ingredients":
    recipes.forEach((recipe) => {
      if (recipe.ingredients.length) {
        const ingredientsMap = recipe.ingredients.map((ingr) =>
          ingr.ingredient.toLowerCase()
        );
        list.push(...ingredientsMap);
      }
    });
    listreduced = [...new Set(list)]; //remove repeated ingredients
    return listreduced;

  case "appliance":
    recipes.forEach((recipe) => {
      if (recipe.appliance.length) {
        const applianceMap = recipe.appliance.toLowerCase();
        list.push(applianceMap);
      }
    });
    listreduced = [...new Set(list)]; //remove repeated appliance
    return listreduced;

  case "ustensils":
    recipes.forEach((recipe) => {
      if (recipe.ustensils.length) {
        const ustensilsMap = recipe.ustensils.map((ust) => ust.toLowerCase());
        list.push(...ustensilsMap);
      }
    });
    listreduced = [...new Set(list)];
    return listreduced;
  }
}

//create list elements for ingredients/appliances/ustensils
function CreateListElements() {
  //******** */
  //  Create list
  //  elements for
  //  ingredients
  //******** */
  const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
  myIngredientsTags.forEach((element) => {
    const searchlistIngredients = document.querySelector(
      ".search-list-ingredients"
    );
    const domIngredients = listsDOM(element, "ingredients");
    searchlistIngredients.append(domIngredients);
  });

  //******** */
  // Create
  // list elements
  //  for appliance
  //******** */

  let myappliancesTags = getElementsInRecipes(recipes, "appliance");
  myappliancesTags.forEach((element) => {
    const searchListappliances = document.querySelector(
      ".search-list-appliances"
    );
    const domAppliance = listsDOM(element, "appliances");
    searchListappliances.append(domAppliance);
  });

  //******** */
  // Create list
  // elements for
  // ustensils
  //******** */

  const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
  myUstensilsTags.forEach((element) => {
    const searchlistUstensils = document.querySelector(
      ".search-list-ustensils"
    );
    const domUstensils = listsDOM(element, "ustensils");
    searchlistUstensils.append(domUstensils);
  });
}

//******** */
// Create
// minitags
//******** */
function createMiniTags() {
  // ingredients
  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );

  let listTagIngredients = [];
  const miniTags = document.querySelector("#mini-tags");
  for (let i = 0; i < listItemIngredients.length; i++) {
    listItemIngredients[i].addEventListener("click", (e) => {
      listTagIngredients.push(listItemIngredients[i]);

      const miniTagsChild = minitagsDOM(
        listItemIngredients[i].innerHTML,
        "primary"
      );
      miniTags.appendChild(miniTagsChild);
      // listItemIngredients[i].remove(); //remove element list
      // remove minitag on click
      removeMiniTag();
    });
  }

  // Appareil
  const listItemAppliances = document.querySelectorAll(
    ".search-item-appliances"
  );

  let listTagAppliances = [];
  for (let i = 0; i < listItemAppliances.length; i++) {
    listItemAppliances[i].addEventListener("click", (e) => {
      listItemAppliances[i].remove(); //remove element list

      listTagAppliances.push(listItemAppliances[i]);

      const miniTagsChild = minitagsDOM(
        listItemAppliances[i].innerHTML,
        "success"
      );
      miniTags.appendChild(miniTagsChild);

      // remove minitag on click
      removeMiniTag();
    });
  }
  // Ustensils
  const listItemUstensils = document.querySelectorAll(".search-item-ustensils");

  let listTagUstensils = [];
  for (let i = 0; i < listItemUstensils.length; i++) {
    listItemUstensils[i].addEventListener("click", (e) => {
      listItemUstensils[i].remove(); //remove element list

      listTagUstensils.push(listItemUstensils[i]);

      const miniTagsChild = minitagsDOM(
        listItemUstensils[i].innerHTML,
        "danger"
      );
      miniTags.appendChild(miniTagsChild);

      removeMiniTag();
    });
  }
}
// createMiniTags();

//******** */
//Create
//Cards
//recettes
//******** */
function createCardRecipes() {
  const rowCardsRecipes = document.querySelector(".cards-recipes");

  recipes.forEach((recipe) => {
    const cardRecipeModel = cardsFactory(recipe);
    const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
    rowCardsRecipes.appendChild(recipeCardDOM);
  });
}
CreateListElements();
createCardRecipes();
