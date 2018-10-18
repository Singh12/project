import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  text: string;
  openMenu: boolean;
  @Output() recipeDetails = new EventEmitter<string>();
  constructor() {
    this.text = '';
    this.openMenu = false;
  }
  showRecipe(recipe) {
    this.recipeDetails.emit(recipe);
  }
  showShopping(shopping) {
    this.recipeDetails.emit(shopping);
  }
  menuOpen() {
    this.openMenu = !this.openMenu;
  }
  ngOnInit() {
  }

}
