import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameMatchingPairs} from "../game-matching-pairs/game-matching-pairs";
import {GameFollowMe} from "../game-follow-me/game-follow-me";


@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  constructor(public navCtrl: NavController) {
  }

  public openPage(page: String) {
    switch (page) {
        case 'game-matching-pairs': this.navCtrl.push(GameMatchingPairs);
            break;
        case 'game-follow-me': this.navCtrl.push(GameFollowMe);
            break;
    }
  }
}
