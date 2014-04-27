App.Preloader = function(game) {
    this.background = null;
    this.preloadBar = null;

    this.SPRITE_SIZE = 48;
    this.TOWER_SIZE = 64;
};

App.Preloader.prototype = {

    preload: function() {
        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(this.world.centerX - 150, this.world.centerY - 60, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);

        this.load.spritesheet('player', 'assets/gfx/player.png', this.SPRITE_SIZE, this.SPRITE_SIZE);
        this.load.spritesheet('tower', 'assets/gfx/tower.png', this.TOWER_SIZE, this.TOWER_SIZE);
        this.load.image('enemy', 'assets/gfx/enemy.png');
        this.load.image('background', 'assets/gfx/background.png');

        // audio for background soundtrack
        this.load.audio('theme_relax', 'assets/sfx/theme_main_relax.ogg');
        this.load.audio('theme_fight', 'assets/sfx/theme_main_fight.ogg');
        // audio for the player
        this.load.audio('footstep', 'assets/sfx/player_footstep.ogg');
        // audio for "pig" enemy
        this.load.audio('enemy_pig_appears', 'assets/sfx/enemy_pig_appears.ogg');
        this.load.audio('enemy_pig_attack', 'assets/sfx/enemy_pig_attack.ogg');
        this.load.audio('enemy_pig_dies', 'assets/sfx/enemy_pig_dies.ogg');
        // audio for tower 1
        this.load.audio('tower1_appears', 'assets/sfx/tower1_appears.ogg');
        this.load.audio('tower1_bites', 'assets/sfx/tower1_bites.ogg');

        this.load.spritesheet('muteToggle', 'assets/interface/sound.png', 16, 16);
        this.load.spritesheet('buttonTower1', 'assets/interface/ui-btn-tower-1.png', 35, 38);

    },

    create: function() {
        var tween = this.add.tween(this.preloadBar)
            .to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startGame, this);
    },

    startGame: function() {
        this.game.state.start('MainMenu');
    }

};
