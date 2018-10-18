import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServiceService } from '../../service/recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
  constructor(private recipeService: RecipeServiceService) { }
  singleRecipe() {
    this.recipeService.recipeDetails.emit(this.recipe);
  }
  ngOnInit() {
  }

}
