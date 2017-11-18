import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as jQuery from 'jquery';

@Component({
    selector: 'page-game-matching-pairs',
    templateUrl: 'game-matching-pairs.html'
})
export class GameMatchingPairs {

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        let phaser = (<any>window).Phaser,
            basicGame = (<any>window).BasicGame,
            game = new phaser.Game(360,600, phaser.AUTO, 'gameContainer');

        (<any>window).jQuery = jQuery;
        game.state.add('Boot', basicGame.Boot);
        game.state.add('Preloader', basicGame.Preloader);
        game.state.add('MainMenu', basicGame.MainMenu);
        game.state.add('Game', basicGame.Game);
        game.state.add('EndScreen',basicGame.EndScreen);

        game.state.start('Boot');
    }
}
