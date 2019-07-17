import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public players= 
  [
    {
      name: 'Cristiano Ronaldo',
      id: 1,
      description: 'Jugador de la Juventus',
      img: "",
      rank: "5.0"
    },
    {
    name: 'Messi',
    id: 2,
    description: 'Jugador del Barcelona',
    img: "",
    rank: "5.0"
    },
    {
      name: 'Neymar',
      id: 3,
      description: 'Jugador del PSG',
      img: "",
      rank: "4.5"
    }
  ];
  constructor() { }
}
