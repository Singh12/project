import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() detailsRecipe = new EventEmitter<Recipe>();
  arrRecipe: Recipe = new Recipe('New Recipe1', 'New RecipeDescription',  'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg');
  constructor() {
    this.recipes = [
      new Recipe('Demo Recipe2', 'Demo Recipe Description', 'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg'),
      new Recipe('Demo Recipe3', 'Demo Recipe Description', 'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg'),
      ];
  }

  ngOnInit() {
  }
  addNewRecipeList() {
    this.recipes.unshift(this.arrRecipe);
  }
  singleRecipeClicked(singleRecip: any) {
    this.detailsRecipe.emit(singleRecip);
  }
}
