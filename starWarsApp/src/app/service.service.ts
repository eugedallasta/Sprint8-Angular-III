import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip, Pilot, User } from './api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  pilots: Pilot[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getDataFromApi(page = 1): Observable<any> {
    const path = 'https://swapi.dev/api/starships/';
    return this.http.get<StarShip[]>(
      `${path}/?page=${page}`);
  }

  getStarship(id: number): Observable<any> {
    const path = `https://swapi.dev/api/starships/${id}`;
    return this.http.get<StarShip>(path);
  }

  getPilot(id: number) {
    const path = `https://swapi.dev/api/people/${id}`;
    this.http.get(path).subscribe((resp: any) => {
      this.pilots.push(resp);
    },
      error => {
        console.log('Error en la petición');
      })
  }

  deletePilot() {
    let numReg: number = this.pilots.length;
    if (numReg > 0) {
      this.pilots.splice(0, numReg);
    }
  }

  getArrayPilots() {
    return this.pilots;
  }


}
