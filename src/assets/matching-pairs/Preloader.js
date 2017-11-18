
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {
        this.stage.backgroundColor = "#ffffff";

		
		this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
		this.bck.anchor.setTo(0.5,0.5);
		this.bck.scale.setTo(0.5,0.5);
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0,0.5);
		this.preloadBar.scale.setTo(0.5,1);
		this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;
		
		
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('title', 'assets/matching-pairs/title.png');
		this.load.atlas('spriteset', 'assets/matching-pairs/spritesheet.png', 'assets/matching-pairs/spritesheet.jsona');
		this.load.spritesheet('play','assets/matching-pairs/play.png',400,110);
		this.load.spritesheet('back','assets/matching-pairs/back.png',400,110);
		this.load.spritesheet('musicbutton','assets/matching-pairs/music.png',400,110);
		this.load.bitmapFont('font', 'assets/matching-pairs/fnt2_0.png', 'assets/matching-pairs/fnt2.fnt');
		this.load.audio('music', ['assets/matching-pairs/music.mp3','assets/matching-pairs/music.ogg','assets/matching-pairs/music.wav','assets/matching-pairs/music.m4a']);
		this.load.audio('blip', ['assets/matching-pairs/blip.mp3','assets/matching-pairs/blip.ogg','assets/matching-pairs/blip.wav','assets/matching-pairs/blip.m4a']);


	},

	create: function () {

		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		
		
		if (this.cache.isSoundDecoded('music') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
