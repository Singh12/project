import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeShoppingServiceService {
  addIngredient = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('mango', 2),
  new Ingredient('mango', 2)
];
  constructor() { }
  getIngredient() {
    return this.ingredients.slice();
  }
  addNewIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    this.addIngredient.emit(this.ingredients.slice());
  }
  addIngredientfromRecipe(ingredient: Ingredient[]) {
    console.log(ingredient);
    this.ingredients.push(...ingredient);
    this.addIngredient.emit(this.ingredients.slice());
  }
}
