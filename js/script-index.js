$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
  printNews();
  renderActivities(activities);
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
    recipe.source.name + "</p><img class='recipe-image' src='img/recipes/320x350/" + 
    recipe.name + ".jpg'/>");
} 

/*
* Función que se encarga de imprimir todas las actividades
*/
function renderActivities(activitiesArray) {
	//console.log('Activities: ', activitiesArray);
  for (var i = 0; i < activitiesArray.length; i++) {
    if (activitiesArray.length > 0) {
      $(".wrapper-message").hide();
      for (var i = 0; i < activities.length; i++) {
        $(".list-activities").append("<a href='#' class='item-activity'><span class='attribution'><span class='avatar'><img src='" + 
        activities[i].userAvatar + "' class='image-avatar'></span><span class='meta'><span class='author'>" + 
        activities[i].userName + "</span><span class='recipe'>" + 
        activities[i].recipeName + "</span>" + 
        activities[i].text + "<span class='location'>" + 
        activities[i].place + "</span></span></span><div class='bg-image' style='background-image: url(" + 
        activities[i].image + ")'></div></a>");
      }
    }
  }
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
