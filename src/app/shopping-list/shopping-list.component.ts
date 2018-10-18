import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeShoppingServiceService } from './service/recipe-shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingService: RecipeShoppingServiceService) {
   }
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.shoppingService.addIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  addClickIngredient(addvent: any) {
    console.log(addvent);
    this.ingredients.push(addvent);
  }

}
