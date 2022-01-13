import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.ship$ = this.service.getShipById(id);
    });
  }
  // getShipDetails() {
  //   this.service.getShipById(1)
  //     .subscribe(ship => {
  //       console.log(ship);
  //     });
  // }

  goBackButton(): void {
    this.location.back();
  }

}
