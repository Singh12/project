import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from '../service/recipe-service.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  arrRecipe: Recipe = new Recipe('New Recipe1', 'New RecipeDescription',  'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg', [new Ingredient('beasr', 1)]);
  constructor(private recipeService: RecipeServiceService) {
    this.recipes = recipeService.getRecipe();
  }
  ngOnInit() {
  }
  addNewRecipeList() {
    this.recipes.unshift(this.arrRecipe);
  }
}
