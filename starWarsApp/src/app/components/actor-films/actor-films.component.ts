import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/api-interface';

@Component({
  selector: 'app-actor-films',
  templateUrl: './actor-films.component.html',
  styleUrls: ['./actor-films.component.css']
})
export class ActorFilmsComponent implements OnInit {

  @Input() actor!: Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
