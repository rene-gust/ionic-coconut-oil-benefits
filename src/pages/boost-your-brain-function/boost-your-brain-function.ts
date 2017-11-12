import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HowToBuyPage} from "../how-to-buy/how-to-buy";

/**
 * Generated class for the BoostYourBrainFunctionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-boost-your-brain-function',
  templateUrl: 'boost-your-brain-function.html',
})
export class BoostYourBrainFunctionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goBuy() {
    this.navCtrl.push(HowToBuyPage);
  }
}
