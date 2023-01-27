import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }
  getGames() {
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }
  comprar(){
    console.log("hola");
  }

}
