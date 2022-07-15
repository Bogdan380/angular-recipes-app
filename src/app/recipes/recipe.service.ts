import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Delicious Pizza',
      'A very delicious family size pizza',
      'https://free4kwallpapers.com/uploads/wallpaper/pizza-in-4k-wallpaper-1920x1080-wallpaper.jpg',
      [
        new Ingredient('Cheese', 5),
        new Ingredient('Ham', 10),
        new Ingredient('Mushrooms', 20),
        new Ingredient('Sauce', 1),
      ]
    ),
    new Recipe(
      'Italian Pasta',
      'Classic Italian pasta - original recipe',
      'https://images6.alphacoders.com/913/913663.jpg',
      [
        new Ingredient('Macaroni', 50),
        new Ingredient('Butter', 10),
        new Ingredient('Garlic', 3),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'Big and tasty burger - very juicy',
      'https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?width=1280&height=720&ext=.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Ketchup', 5),
        new Ingredient('Mustard', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
