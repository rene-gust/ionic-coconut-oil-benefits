import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PuzzleGamePage} from "../puzzle-game/puzzle-game";
import {ZokoGamePage} from "../zoko-game/zoko-game";

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  constructor(public navCtrl: NavController) {
  }

  public openPage(page: String) {
    switch (page) {
        case 'puzzle-game': this.navCtrl.push(PuzzleGamePage);
            break;
        case 'zoko-game': this.navCtrl.push(ZokoGamePage);
            break;
    }
  }
}
