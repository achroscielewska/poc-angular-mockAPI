import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment  as env } from '../../environments/environment';
import { PantryDto } from '../dto';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  headers = this.prepareHeaders();
  constructor(private httpClient: HttpClient) {}

  private prepareHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  getPantryContent(): Observable<PantryDto[]> {
    return this.httpClient
      .get(env.pantryUrl, { ...this.headers })
      .pipe(map((res: PantryDto[]) => res));
  }

  getPantryElement(id: number): Observable<PantryDto> {
    return this.httpClient
      .get(`${env.pantryUrl}/${id}`, { ...this.headers })
      .pipe(map((res: PantryDto) => res));
  }

}
