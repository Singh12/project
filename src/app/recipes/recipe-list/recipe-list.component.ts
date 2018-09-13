import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  arrRecipe: Recipe = new Recipe('New Recipe', 'New RecipeDescription',  'http://www.kraftrecipes.com/-/media/assets/fall15_heroes/hot-parmesan-artichoke-dip-51255-642x428.jpg');
  constructor() {
    this.recipes = [
      new Recipe('Demo Recipe', 'Demo Recipe Description', 'http://www.kraftrecipes.com/-/media/assets/fall15_heroes/hot-parmesan-artichoke-dip-51255-642x428.jpg'),
      ];
  }

  ngOnInit() {
  }
  addNewRecipeList() {
    this.recipes.unshift(this.arrRecipe);
  }
}
