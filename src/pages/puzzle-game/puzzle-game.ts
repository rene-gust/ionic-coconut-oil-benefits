import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-puzzle-game',
    templateUrl: 'puzzle-game.html'
})
export class PuzzleGamePage {

    constructor(public navCtrl: NavController) {

    }
    ionViewDidLoad() {
        (<any>window).Game.init();
        (<any>window).Game.start();
    }
}
