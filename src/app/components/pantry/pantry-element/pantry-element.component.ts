import { Component, Input } from '@angular/core';
import { PantryElDto } from 'src/app/dto';

@Component({
  selector: 'app-pantry-element',
  templateUrl: './pantry-element.component.html',
  styleUrls: ['./pantry-element.component.scss']
})
export class PantryElementComponent {
  @Input() pantryElement: PantryElDto;

  constructor() { }
}
