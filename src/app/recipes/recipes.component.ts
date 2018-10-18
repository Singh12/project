import { Component, OnInit, Input } from '@angular/core';
import { RecipeServiceService } from './service/recipe-service.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService]
})
export class RecipesComponent implements OnInit {
  detailRec: Recipe;
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.recipeDetails.subscribe(
      (recipe: Recipe) => {
        this.detailRec = recipe;
      }
    );
  }

}
