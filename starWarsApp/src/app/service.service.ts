import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from './api-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getDataFromApi(page = 1) {
    const path = 'https://swapi.dev/api/starships/';
    return this.http.get<StarShip[]>(
      `${path}/?page=${page}`);
  }

  getShipById(url: string) {
    const path = `https://swapi.dev/api/starships/${url}/`;
    return this.http.get<StarShip>(path);
  }
}
