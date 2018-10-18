import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeShoppingServiceService } from '../../shopping-list/service/recipe-shopping-service.service';

@Injectable()
export class RecipeServiceService {
  recipeDetails = new EventEmitter<Recipe>();
private recipes: Recipe[] = [
  new Recipe('Demo Recipe2',
  'Demo Recipe Description',
  'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg',
   [new Ingredient('meat', 1)]
  ),
  new Recipe('Demo Recipe3', 'Demo Recipe Description', 'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg', [new Ingredient('bread', 1)]),
  ];
  constructor(private ingrService: RecipeShoppingServiceService) { }
  getRecipe() {
    return this.recipes.slice();
  }
  addIngredients(ingredient: Ingredient[]) {
   this.ingrService.addIngredientfromRecipe(ingredient);
  }
}
