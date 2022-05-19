
 function createCardRecipes() {
    const cadrsListRecette = document.querySelector(".cards_grib");
   
    recipes.forEach((recipe) => {
      const PageModelRecette  = cardList(recipe);
      const cadrsListDOM = PageModelRecette.recetteDom();
      cadrsListRecette.appendChild(cadrsListDOM);
    });
  }


  function createListIng(Ing) {
    const printListIng = document.querySelector(".search-list-ingredients");
   
    Ing.forEach((ingredient) => {
      const ModelListIng  = listeIngredients(ingredient);
      const ListDOM = ModelListIng.IngredientsDom();
      printListIng.appendChild(ListDOM);
    });
  }


  function createListApp(App) {
    const printListApp = document.querySelector(".search-list-appliance");
   
    App.forEach((appliance) => {
      const ModelListApp  = listeAppliance(appliance);
      const ListAppDOM = ModelListApp.applianceDom();
      printListApp.appendChild(ListAppDOM);
    });

    // console.log( printListApp)
  }



  function createListUst(ust) {
    const printListUst = document.querySelector(".search-list-ustensils");
   
    ust.forEach((ustensils) => {
      const ModelListUst  = listeUstensils(ustensils);
      const ListUstDOM = ModelListUst.ustensilsDom();
      printListUst.appendChild(ListUstDOM);
    });

    console.log( printListUst)
  }

 

 

 

 
 

   function init() {
      // Récupère les datas des photographes
      fetch("./data/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const { recipes } = data;
        createCardRecipes(recipes);
        createListIng(recipes);
        createListApp(recipes)
        createListUst(recipes)
        
      });
       

  };
  
  init();
  