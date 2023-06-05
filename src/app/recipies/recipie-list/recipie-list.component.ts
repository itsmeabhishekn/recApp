import { Component } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent {
  recipies: Recipie[] = [
    new Recipie('A Test recipie','this is a sample recipie','https://images.news18.com/ibnlive/uploads/2021/12/coffee-mug-16387975963x2.jpg?impolicy=website&width=510&height=356')
  ]
}
