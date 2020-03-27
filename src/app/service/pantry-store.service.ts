import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PantryService } from './pantry.service';

@Injectable({
  providedIn: 'root'
})
export class PantryStoreService {
  private pantryStore = new BehaviorSubject([]);
  currentPantryStore = this.pantryStore.asObservable();

  constructor(private pantryService: PantryService) { }

  getPantryList() {
    this.pantryService.getPantryContent().subscribe(
      res => this.pantryStore.next(res),
      err => console.log(err)
    );
  }
}
