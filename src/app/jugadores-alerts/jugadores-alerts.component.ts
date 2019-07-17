import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PlayerService } from '../player.service';

@Component({
  selector: 'app-jugadores-alerts',
  templateUrl: './jugadores-alerts.component.html',
  styleUrls: ['./jugadores-alerts.component.css']
})
export class JugadoresAlertsComponent implements OnInit {

  @Input() players;
  @Output() notify= new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
