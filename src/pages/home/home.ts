import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InfoWikiPage} from "../info-wiki/info-wiki";
import {VideoTutorialsPage} from "../video-tutorials/video-tutorials";
import {GamesPage} from "../games/games";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  public openPage(page: String) {
    switch (page) {
        case 'info-wiki': this.navCtrl.push(InfoWikiPage);
            break;
        case 'video-tutorials': this.navCtrl.push(VideoTutorialsPage);
            break;
        case 'games': this.navCtrl.push(GamesPage);
            break;
    }
  }
}
