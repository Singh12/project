import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeShoppingServiceService } from '../service/recipe-shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient[];
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private ingredientService: RecipeShoppingServiceService) { }
  onClcikAdd() {
    this.ingredientService.addNewIngredient(new Ingredient(this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value));
  }
  ngOnInit() {
  }

}
