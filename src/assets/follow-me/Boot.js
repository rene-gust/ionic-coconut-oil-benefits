/*  Created by Nambiar for Game Dolphin (gamedolph.in)
    Game - Follow Me - Simple Simon Clone 
*/

var FollowMeGame = {};

var playmusic = true;

FollowMeGame.Boot = function (game) {

};

FollowMeGame.Boot.prototype = {

    preload: function () {

        this.load.image('preloaderBackground', 'assets/follow-me/preloadbck.png');
        this.load.image('preloaderBar', 'assets/follow-me/preloadbar.png');

    },

    create: function () {
        this.stage.backgroundColor = "#ffffff";
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.resizeCanvas();
        var self = this;
        jQuery(window).resize(function () {
            self.resizeCanvas();
        });
        this.state.start('Preloader');

    },

    resizeCanvas: function () {
        var docsHeight = jQuery('#main-game-container .scroll-content').innerHeight(),
            docsWidth = jQuery('#main-game-container .scroll-content').innerWidth(),
            newHeight = docsWidth * (1 / 0.6),
            size;
        if (docsWidth > docsHeight || newHeight > docsHeight) {
            size = {width: (0.6)*docsHeight, height: docsHeight};
        } else {
            size = {width: docsWidth, height: docsWidth * (1 / 0.6)};
        }

        this.scale.minWidth = size.width;
        this.scale.minHeight = size.height;
        this.scale.maxWidth = size.width;
        this.scale.maxHeight = size.height;
        this.scale.forceLandscape = false;
        this.scale.pageAlignHorizontally = true;
        this.scale.setScreenSize(true);
    }

};
