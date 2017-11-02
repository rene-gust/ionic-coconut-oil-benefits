import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HowToBuyPage} from "../how-to-buy/how-to-buy";
import {MarketingManager} from "../marketingmanager";
/**
 * Generated class for the PetsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    MarketingManager.pageOpened();
  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
