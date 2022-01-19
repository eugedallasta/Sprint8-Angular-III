import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from './api-interface';
import { findIndex } from 'rxjs';

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
    return this.http.get<StarShip>(path);
  }

  // getId(url: string) {
  //   let regex: RegExp = /(\d+)/g;
  //   const id: RegExpMatchArray | null = url.match(regex);
  //   const idjoin = id?.join();
  //   console.log(idjoin);
  // }
}
