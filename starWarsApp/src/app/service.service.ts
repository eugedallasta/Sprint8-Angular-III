import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from './api-interface';
import { findIndex, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getDataFromApi(page = 1): Observable<any> {
    const path = 'https://swapi.dev/api/starships/';
    return this.http.get<StarShip[]>(
      `${path}/?page=${page}`);
  }


  getStarship(id: number): Observable<any> {
    console.log('Starship ID:', id)
    const path = `https://swapi.dev/api/starships/${id}`;
    return this.http.get<StarShip>(path);
  }


}
