import { Component, Input } from '@angular/core';
import { PantryDto } from 'src/app/dto';

@Component({
  selector: 'app-pantry-element',
  templateUrl: './pantry-element.component.html',
  styleUrls: ['./pantry-element.component.scss']
})
export class PantryElementComponent {
  @Input() pantryElement: PantryDto;

  constructor() { }
}
