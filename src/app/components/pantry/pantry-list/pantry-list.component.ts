import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PantryService } from 'src/app/service/pantry.service';
import { PantryElDto } from 'src/app/dto';
import { HttpResponse } from '@angular/common/http';
import { PantryListHelperService } from 'src/app/service/pantry-list-helper.service';

@Component({
  selector: 'app-pantry-list',
  templateUrl: './pantry-list.component.html',
  styleUrls: ['./pantry-list.component.scss']
})
export class PantryListComponent implements OnInit, OnDestroy {
  pantryContent$: Observable<HttpResponse<any>>;
  pantryElement$: Observable<PantryElDto>;
  pantryElementsSub: Subscription;
  pantryElement: PantryElDto;

  listElSub = new Subscription();

  firstPageLink: string;
  prevPageLink: string;
  nextPageLink: string;
  lastPageLink: string;

  totalCounter: number;

  addFormVisible = false;

  constructor(
    private pantryService: PantryService,
    private helper: PantryListHelperService
  ) { }

  ngOnInit(): void {
    this.pantryContent$ = this.pantryService.getPantryContent();

    this.listElSub.add(this.helper.currentFirstPageLink.subscribe(data => this.firstPageLink = data));
    this.listElSub.add(this.helper.currentPrevPageLink.subscribe(data => this.prevPageLink = data));
    this.listElSub.add(this.helper.currentNextPageLink.subscribe(data => this.nextPageLink = data));
    this.listElSub.add(this.helper.currentLastPageLink.subscribe(data => this.lastPageLink = data));
    this.listElSub.add(this.helper.currentTotalCount.subscribe(data => this.totalCounter = data));
  }

  ngOnDestroy() {
    this.listElSub.unsubscribe();
  }

  showDetails(id: number) {
    this.pantryElement$ = this.pantryService.getPantryElement(id);
  }

  goToSelectedPage(url: string) {
    this.pantryContent$ = this.pantryService.getPantryContent(url);
  }

  toggleAddForm() {
    this.addFormVisible = !this.addFormVisible;
  }

}
