import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, StarShip } from 'src/app/api-interface';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() ship!: StarShip;
  films: Film[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.films = [];
    const regex = /(\d+)/g;
    this.ship.films.map(film => {
      const idInUrl: RegExpMatchArray | null = film.match(regex);
      const id: number = parseInt(idInUrl![0]);
      this.service.getFilms(id);
    });
    this.films = this.service.getArrayFilms();
    console.log('this.pilots -->', this.films)
  }

}
