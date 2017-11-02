import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HowToBuyPage} from "../how-to-buy/how-to-buy";
import {MarketingManager} from "../marketingmanager";
/**
 * Generated class for the BoostYourImmuneSystemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boost-your-immune-system',
  templateUrl: 'boost-your-immune-system.html',
})
export class BoostYourImmuneSystemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    MarketingManager.pageOpened();
  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
