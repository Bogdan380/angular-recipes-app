import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
