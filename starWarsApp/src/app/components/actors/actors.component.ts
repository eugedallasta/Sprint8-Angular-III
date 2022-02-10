import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Observable, take } from 'rxjs';
import { Actor, Film, StarShip } from 'src/app/api-interface';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actorslist: Actor[] = [];
  films: Film[] = [];
  shipslist: StarShip[] = [];
  actor!: Actor;

  next: null = null;
  private pageNum: number = 1;
  private hideScrollHeight: number = 200;
  private showScrollHeight: number = 400;
  showGoUpButton = false;



  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getActors();
    this.getFilms();
    this.getShips();
  }
  getActors(page = 1): void {
    this.service.getActorsFromApi(this.pageNum).pipe(take(1))
      .subscribe((response: any) => {
        const { next, results } = response
        this.actorslist = [...this.actorslist, ...results]
        this.next = next
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.next) {
      this.pageNum++;
      this.getActors();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0;//Others
  }

  // ------------------------PRUEBAS


  getFilms(): void {
    const regex = /(\d+)/g;
    this.actor.films.map(film => {
      const idInUrl: RegExpMatchArray | null = film.match(regex);
      const id: number = parseInt(idInUrl![0]);
      this.service.getFilms(id);
    });
    this.films = this.service.getArrayFilms();
  }
  getShips(): void {
    const regex = /(\d+)/g;
    this.actor.starships.map(ship => {
      const idInUrl: RegExpMatchArray | null = ship.match(regex);
      const id: number = parseInt(idInUrl![0]);
      this.service.getShips(id);
    });
    this.shipslist = this.service.getArrayShips();
  }

}
























