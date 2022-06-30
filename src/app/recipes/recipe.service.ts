import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is just a test',
      'https://www.tasteofhome.com/wp-content/uploads/2022/06/Thai-Drunken-Noodles-with-Beef_EXPS_RC21_264389_B09_28_4b.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is just a test',
      'https://www.tasteofhome.com/wp-content/uploads/2022/06/Thai-Drunken-Noodles-with-Beef_EXPS_RC21_264389_B09_28_4b.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
