import { Component, OnInit, Input } from '@angular/core';
import { RecipeServiceService } from '../service/recipe-service.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() detailsRecipes;
  constructor(private recipeService: RecipeServiceService) {
  }

  ngOnInit() {
    console.log(this.detailsRecipes);
  }
  addShoppingList() {
    this.recipeService.addIngredients(this.detailsRecipes.ingrdient);
  }
}
