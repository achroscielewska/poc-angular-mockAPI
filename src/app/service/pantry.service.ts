import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { PantryElDto } from '../dto';
import { PantryListHelperService } from './pantry-list-helper.service';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  pageQueryUrl = '_page=';
  limitQueryUrl = '_limit=';
  headers = this.prepareHeaders();
  queryLimit = env.queryLimit;

  firstGetPantryContentUrl = `${env.pantryUrl}?${this.pageQueryUrl}1&${this.limitQueryUrl}${this.queryLimit}`;

  constructor(
    private httpClient: HttpClient,
    private pantryListHelperService: PantryListHelperService) { }

  private prepareHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  getPantryContent(url = this.firstGetPantryContentUrl): Observable<HttpResponse<any>> {
    return this.httpClient
      .get(`${url}`, { headers: this.headers, observe: 'response' })
      .pipe(map((resp: HttpResponse<any>) => {
        this.pantryListHelperService.saveTotalCount(resp.headers.get('X-Total-Count'));
        this.pantryListHelperService.saveLinks(resp.headers.get('link'));
        return resp.body;
      }));
  }

  getPantryElement(id: number): Observable<PantryElDto> {
    return this.httpClient
      .get(`${env.pantryUrl}/${id}`, { ...this.headers })
      .pipe(map((res: PantryElDto) => res));
  }

  savePantryElement(pantryEl: PantryElDto): Observable<any> {
    return this.httpClient
      .post(`${env.pantryUrl}`, pantryEl, { ...this.headers });

  }

}
