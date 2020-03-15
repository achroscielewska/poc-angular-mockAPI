import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PantryListHelperService {
  private firstPageLink = new BehaviorSubject('');
  currentFirstPageLink = this.firstPageLink.asObservable();

  private prevPageLink = new BehaviorSubject('');
  currentPrevPageLink = this.prevPageLink.asObservable();

  private nextPageLink = new BehaviorSubject('');
  currentNextPageLink = this.nextPageLink.asObservable();

  private lastPageLink = new BehaviorSubject('');
  currentLastPageLink = this.lastPageLink.asObservable();

  private totalCount = new BehaviorSubject(0);
  currentTotalCount = this.totalCount.asObservable();

  constructor() { }

  saveLinks(links: string) {
    this.firstPageLink.next('');
    this.prevPageLink.next('');
    this.nextPageLink.next('');
    this.lastPageLink.next('');

    const linksArr = links.split(', ').map(res => res.split('; '));

    linksArr.forEach(res => {
      let link = res[0];
      link = link.substring(1);
      link = link.slice(0, -1);
      link = link.replace('http://localhost:4200/', '');


      switch (res[1]) {
        case 'rel="first"':
        this.firstPageLink.next(link);
        break;
        case 'rel="prev"':
        this.prevPageLink.next(link);
        break;
        case 'rel="next"':
        this.nextPageLink.next(link);
        break;
        case 'rel="last"':
        this.lastPageLink.next(link);
        break;
        default:
        break;
      }
    });
  }

  saveTotalCount(total: string) {
    this.totalCount.next(+total);
  }
}
