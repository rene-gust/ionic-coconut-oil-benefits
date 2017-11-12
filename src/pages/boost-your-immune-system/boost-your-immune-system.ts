import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HowToBuyPage} from "../how-to-buy/how-to-buy";
/**
 * Generated class for the BoostYourImmuneSystemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-boost-your-immune-system',
  templateUrl: 'boost-your-immune-system.html',
})
export class BoostYourImmuneSystemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
