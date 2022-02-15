import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Planet } from 'src/app/api-interface';
import { ServiceService } from 'src/app/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {

  planet$!: Observable<Planet>;
  id: number = 0;

  constructor(private route: ActivatedRoute, private service: ServiceService, private location: Location, private router: Router) { }

  ngOnInit(): void {

  }
  goBackButton(): void {
    this.location.back();
  }

}
