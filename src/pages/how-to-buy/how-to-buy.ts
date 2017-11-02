import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HowToBuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-to-buy',
  templateUrl: 'how-to-buy.html',
})
export class HowToBuyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
