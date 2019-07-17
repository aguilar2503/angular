import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

import { CartPlayerService } from "../cart-player.service";
import { PlayerService} from "../player.service";

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {
  public players;
  public player;

  constructor( private route: ActivatedRoute, private cartService: CartPlayerService,
    private playerService: PlayerService) { 
      this.players = playerService.players;
    }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.players = this.players[+params.get('playersId')];
      }
    );
  }
  addToCart(player){
    this.cartService.addToCart(player);
    alert("se añadio un producto al carrito de compras"+JSON.stringify(this.cartService.getItems()));
  }

}
