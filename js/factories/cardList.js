function cardList(data){

    const{ id,name,servings,ingredients,ingredient,quantity,unit,time,description,appliance,ustensils} = data;

    function recetteDom(){

        const block  = document.createElement( 'div' );
        block.classList.add("recette_card");

        let blocRectte = "";

        blocRectte +=`
        <div class="header_bloc">
          <img class="img_recette" src="./assets/recettes/${id}.jpg"  alt="${name}s">
          <h2>${name}</h2>
          <div class="time">
          <span> <i class="far fa-clock"></i> ${time} min </span>
          </div>
        </div>
      `;
         
      ingredients.forEach((ingredient) => {
        blocRectte += `
        <div class="listIngredient">
        <div class="ingredient"> 
          <strong>${ingredient.ingredient}:</strong> <span>${
          ingredient.quantity ? ingredient.quantity : (ingredient.quantity = "")
        } <span>${
          ingredient.quantite ? ingredient.quantite : (ingredient.quantite = "")
        } ${ingredient.unit ? ingredient.unit : (ingredient.unit = "")} ${
          ingredient.unite ? ingredient.unite : (ingredient.unite = "")
        }</span><br />
        </div>

          `;
      
      });

      blocRectte += `
      <div class="description"> 
      <p> ${description}</p>
     </div>
        
     </div>
     `
      block.innerHTML = blocRectte;

      return block;
    }

    return {id,name,servings,ingredients,ingredient,quantity,unit,time,description,appliance,ustensils,recetteDom}

    
}

