import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  text: string;
  @Output() recipeDetails = new EventEmitter<string>();
  constructor() {
    this.text = '';
  }
  showRecipe(recipe) {
    this.recipeDetails.emit(recipe);
  }
  showShopping(shopping) {
    this.recipeDetails.emit(shopping);
  }
  ngOnInit() {
  }

}
