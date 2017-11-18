import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as jQuery from 'jquery';

@Component({
    selector: 'page-game-follow-me',
    templateUrl: 'game-follow-me.html'
})
export class GameFollowMe {

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        let phaser = (<any>window).Phaser,
            basicGame = (<any>window).FollowMeGame,
            game = new phaser.Game(360,600, phaser.AUTO, 'gameContainer');

        (<any>window).jQuery = jQuery;
        game.state.add('Boot', basicGame.Boot);
        game.state.add('Preloader', basicGame.Preloader);
        game.state.add('Game', basicGame.Game);

        game.state.start('Boot');
    }
}
