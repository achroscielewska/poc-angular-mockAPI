import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PantryService } from 'src/app/service/pantry.service';
import { PantryDto } from 'src/app/dto';

@Component({
  selector: 'app-pantry-list',
  templateUrl: './pantry-list.component.html',
  styleUrls: ['./pantry-list.component.scss']
})
export class PantryListComponent implements OnInit {
  pantryContent$: Observable<PantryDto[]>;
  pantryElement$: Observable<PantryDto>;
  constructor(private pantryService: PantryService) { }

  ngOnInit(): void {
    this.pantryContent$ = this.pantryService.getPantryContent();
  }

  showPantryElDetails(id: number) {
    this.pantryElement$ = this.pantryService.getPantryElement(id);
  }

}
