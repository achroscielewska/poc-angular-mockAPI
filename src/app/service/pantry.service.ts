import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment  as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  constructor(private httpClient: HttpClient) {}

  private prepareHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  getPantryContent() {
    const headers = this.prepareHeaders();
    return this.httpClient.get(env.pantryUrl, { headers });
  }

}
