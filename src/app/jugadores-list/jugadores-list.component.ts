import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {
  public players;

  constructor( private playerService: PlayerService) {
    this.players = playerService.players;
   }

  ngOnInit() {
  }
  share(){
    alert("El producto esta agotado");
  }
  onNotify(){
    alert("Notificacion de producto");
  }


}
