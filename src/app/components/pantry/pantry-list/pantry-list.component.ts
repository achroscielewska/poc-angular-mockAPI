import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PantryService } from 'src/app/service/pantry.service';
import { PantryElDto } from 'src/app/dto';
import { PantryListHelperService } from 'src/app/service/pantry-list-helper.service';
import { PantryStoreService } from 'src/app/service/pantry-store.service';

@Component({
  selector: 'app-pantry-list',
  templateUrl: './pantry-list.component.html',
  styleUrls: ['./pantry-list.component.scss']
})
export class PantryListComponent implements OnInit, OnDestroy {
  pantryContent$: Observable<PantryElDto[]>;
  pantryContentSub: Subscription;
  pantryContent: PantryElDto[];

  pantryElement$: Observable<PantryElDto>;

  listElSub = new Subscription();

  firstPageLink: string;
  prevPageLink: string;
  nextPageLink: string;
  lastPageLink: string;

  totalCounter: number;

  addFormVisible = false;

  constructor(
    private pantryService: PantryService,
    private helper: PantryListHelperService,
    private pantryStoreService: PantryStoreService
  ) { }

  ngOnInit(): void {
    this.pantryStoreService.getPantryList();
    this.pantryStoreService.currentPantryStore.subscribe(data => {
      this.pantryContent = data;
    });

    this.listElSub.add(this.helper.currentFirstPageLink.subscribe(data => this.firstPageLink = data));
    this.listElSub.add(this.helper.currentPrevPageLink.subscribe(data => this.prevPageLink = data));
    this.listElSub.add(this.helper.currentNextPageLink.subscribe(data => this.nextPageLink = data));
    this.listElSub.add(this.helper.currentLastPageLink.subscribe(data => this.lastPageLink = data));
    this.listElSub.add(this.helper.currentTotalCount.subscribe(data => this.totalCounter = data));
    this.listElSub.add(this.helper.currentIsAddFormVisible.subscribe(data => this.addFormVisible = data));
  }

  ngOnDestroy() {
    this.listElSub.unsubscribe();
    this.pantryContentSub.unsubscribe();
  }

  deleteElement(id: number) {
    this.pantryService.deletePantryElement(id)
      .subscribe(
        res => this.pantryStoreService.getPantryList(),
        err => console.error(err)
      );
  }

  showDetails(id: number) {
    this.pantryElement$ = this.pantryService.getPantryElement(id);
  }

  goToSelectedPage(url: string) {
    this.pantryContent$ = this.pantryService.getPantryContent(url);
  }

  toggleAddForm() {
    this.helper.toggleAddForm(!this.addFormVisible);
  }

}
