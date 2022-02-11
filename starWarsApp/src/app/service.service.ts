import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip, Pilot, User, Actor, Film } from './api-interface';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  pilots: Pilot[] = [];
  films: Film[] = [];
  ships: StarShip[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getDataFromApi(page = 1): Observable<any> {
    const path = 'https://swapi.dev/api/starships/';
    return this.http.get<StarShip[]>(
      `${path}/?page=${page}`);
  }

  getActorsFromApi(page = 1): Observable<any> {
    const path = 'https://swapi.dev/api/people/';
    return this.http.get<Actor[]>(
      `${path}/?page=${page}`);
  }

  getStarship(id: number): Observable<any> {
    const path = `https://swapi.dev/api/starships/${id}`;
    return this.http.get<StarShip>(path)
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

  getFilms(id: number) {
    const path = `https://swapi.dev/api/films/${id}`;
    this.http.get(path).subscribe((resp: any) => {
      this.films.push(resp);
    },
      error => {
        console.log('Error en la petición');
      })
  }
  getArrayFilms() {
    return this.films;
  }
  deleteFilms() {
    let numReg: number = this.films.length;
    if (numReg > 0) {
      this.films.splice(0, numReg);
    }
  }
  // --------------------------------- PRUEBAS
  getShips(id: number) {
    const path = `https://swapi.dev/api/starships/${id}`;
    this.http.get(path).subscribe((resp: any) => {
      this.ships.push(resp);
    },
      error => {
        console.log('Error en la petición');
      })
  }
  getArrayShips() {
    return this.ships;
  }





}
