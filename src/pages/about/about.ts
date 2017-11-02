import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HowToBuyPage} from "../how-to-buy/how-to-buy";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
