import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip, Pilot, User, Actor, Film, Planet } from './api-interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
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
  getPlanetsFromApi(page = 1): Observable<any> {
    const path = 'https://swapi.dev/api/planets/';
    return this.http.get<Planet[]>(
      `${path}/?page=${page}`);
  }
  getStarship(id: number): Observable<any> {
    const path = `https://swapi.dev/api/starships/${id}`;
    return this.http.get<StarShip>(path)
  }
  getFilms(id: number): Observable<any> {
    const path = `https://swapi.dev/api/films/${id}`;
    return this.http.get<Film>(path)
  }
  getPilot(id: number) {
    const path = `https://swapi.dev/api/people/${id}`;
    return this.http.get<Pilot>(path);
  }

}
