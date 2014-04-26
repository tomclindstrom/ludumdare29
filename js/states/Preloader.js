App.Preloader = function(game) {
    this.background = null;
    this.preloadBar = null;
};

App.Preloader.prototype = {

    preload: function() {
        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(this.world.centerX - 150, this.world.centerY - 60, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('player', 'assets/gfx/player.png');
        this.load.image('background', 'assets/gfx/background.png');
        this.load.image('tower', 'assets/gfx/tower.png');
        this.load.image('enemy', 'assets/gfx/enemy.png');
        this.load.audio('theme_relax', 'assets/sfx/theme_main_relax.ogg');
        this.load.audio('theme_fight', 'assets/sfx/theme_main_fight.ogg');
        this.load.audio('footstep', 'assets/sfx/player_footstep.ogg');
        this.load.audio('enemyAttack', 'assets/sfx/ennemy_attack_pig.ogg');
        this.load.spritesheet('muteToggle', 'assets/interface/sound.png', 16, 16);
        this.load.image('buttonTower1', 'assets/interface/ui-btn-tower-1.png');

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
