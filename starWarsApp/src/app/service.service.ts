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

  getShipById(id: number) {

    const path = `https://swapi.dev/api/starships/${id}`;
    this.getId(path);

    return this.http.get<StarShip>(path);
  }

  getId(url: string) {
    let regex = /(\d+)/g;
    const id = url.match(regex);
    console.log(id);
  }
}