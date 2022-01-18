import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private service: ServiceService, private location: Location) { }

  ngOnInit(): void {
  }



  goBackButton(): void {
    this.location.back();
  }

}
