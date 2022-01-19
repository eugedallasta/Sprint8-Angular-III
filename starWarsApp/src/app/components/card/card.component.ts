import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { StarShip } from 'src/app/api-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  ship$!: Observable<StarShip>;
  id: number = 0;
  shipImage: string = '';

  constructor(private route: ActivatedRoute, private service: ServiceService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.ship$ = this.service.getStarship(this.id);
      this.shipImage = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
    })
  }

  goBackButton(): void {
    this.location.back();
  }

}
