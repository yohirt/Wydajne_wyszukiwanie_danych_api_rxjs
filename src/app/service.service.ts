import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from './app.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceService {
  API_PATH = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  search(name: string): Observable<Array<Character>> {
    let params = new HttpParams({ fromObject: { name } });
    return this.http
      .get<{ results: Array<Character> }>(this.API_PATH, { params })
      .pipe(map((response) => response.results));
  }
}
