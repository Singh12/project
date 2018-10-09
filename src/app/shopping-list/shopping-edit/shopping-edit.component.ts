import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient[];
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addIngedients = new EventEmitter<any>();
  constructor() { }
  onClcikAdd() {
    this.addIngedients.emit(new Ingredient(this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value));
  }
  ngOnInit() {
  }

}
