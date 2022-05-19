function listeIngredients(data){

    const{ ingredients,ingredient} = data;

    function IngredientsDom(){
        const list  = document.createElement( 'li' );
        let listAllIng = "";
         
        ingredients.forEach((ingredient) => {
        listAllIng += `
            <li> ${ingredient.ingredient}</li>
          `
        });
      
     list.innerHTML = listAllIng;
      return list;
    }

    return {ingredients,ingredient,IngredientsDom}
}

/*********************************************************** */

//Appliance

function listeAppliance(data){
  const{appliance} = data;

  function applianceDom(){
      const listAppliance  = document.createElement('li');

      let listAllApp = "";

      listAllApp += ` ${appliance} `;

      listAppliance.innerHTML = listAllApp;

    return listAppliance;
  }

  return {appliance,applianceDom}
}


/*********************************************************** */

//ustensils

function listeUstensils(data){
  const{ustensils} = data;

  function ustensilsDom(){
      const listUstensilsDom  = document.createElement('li');

      let listAllUst = "";

      listAllUst += ` ${ustensils} `;

      listUstensilsDom.innerHTML = listAllUst;

    return listUstensilsDom;
  }

  return {ustensils,ustensilsDom}
}




