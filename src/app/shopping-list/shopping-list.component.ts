import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor() {
    this.ingredients = [new Ingredient('mango', 2),
    new Ingredient('mango', 2)
  ];
   }

  ngOnInit() {
  }
  addClickIngredient(addvent: any) {
    console.log(addvent);
    this.ingredients.push(addvent);
  }

}
