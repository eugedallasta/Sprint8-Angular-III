import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/api-interface';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  next: null = null;
  private pageNum: number = 1;
  private hideScrollHeight: number = 200;
  private showScrollHeight: number = 400;
  showGoUpButton = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  getPlanets() { }
  goToDetail(url: string) { }

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
      this.getPlanets();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0;//Others
  }

}
