$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
  printNews();
});
//ocultar iconos
$(".hidden").toggle(); 
/*
* Función que se encarga de imprimir TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	// console.log('Recipes: ', recipesArray);
  for (var i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].highlighted == true) {
      renderRecipe(recipesArray[i]);
    }
  }
}

/*
* Función que se encarga de imprimir UNA receta que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	// console.log('Voy a imprimir la receta: ', recipe);
  var listRecipes = $(".list-recipes");

  listRecipes.append("<h2 class='title-recipe'>" + 
    recipe.title + "</h2><p class='author-recipe'> " +
    recipe.source.name + "</p><img class='recipe-image' src='" + 
    recipe.source.url + "'/>")

}



/*
* Función que se encarga de imprimir todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de imprimir una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

function printNews(){
  $(".callout-paragraph").text("NUEVAS RECETAS")
}
