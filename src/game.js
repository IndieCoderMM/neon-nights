import Phaser from 'phaser';
import skyLineImage from './res/background/skyline-a.png';
import tileImage from './res/tile.png';
import coraSheet from './res/player/spritesheet.png';

const SPEED = 150;
const FPS = 5;

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: { preload, create, update },
};

var game = new Phaser.Game(config);
var platforms;
var player;
var cursors;

function preload() {
  this.load.image('skyline', skyLineImage);
  this.load.image('ground', tileImage);
  this.load.spritesheet('cora', coraSheet, {
    frameWidth: 142,
    frameHeight: 134,
  });
}

function create() {
  this.add.image(0, 0, 'skyline').setOrigin(0, 0);
  platforms = this.physics.add.staticGroup();
  platforms.create(100, 300, 'ground');

  player = this.physics.add.sprite(100, 100, 'cora');
  player.setBounce(0.1);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, platforms);

  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('cora', { start: 0, end: 3 }),
    frameRate: FPS,
    repeat: -1,
  });
  this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNumbers('cora', { start: 4, end: 11 }),
    frameRate: FPS,
    repeat: -1,
  });
  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('cora', { start: 12, end: 14 }),
    frameRate: FPS,
    repeat: -1,
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-SPEED);
    player.anims.play('run', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(SPEED);
    player.anims.play('run', true);
  } else {
    player.setVelocityX(0);
    player.anims.play('idle', true);
  }
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
    player.anims.play('jump', true);
  }
}
