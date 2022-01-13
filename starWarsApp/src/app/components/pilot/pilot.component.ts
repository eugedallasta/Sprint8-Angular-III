import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBackButton(): void {
    this.location.back();
  }

}
