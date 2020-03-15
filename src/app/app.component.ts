import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PantryService } from './service/pantry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mockAPI';
  pantryContent$: Observable<any>;

  constructor(private pantryService: PantryService) {}

  ngOnInit() {
    this.pantryContent$ = this.pantryService.getPantryContent();
  }
}
