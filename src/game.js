import Phaser from 'phaser';
import tileSetImage from './res/map/tileset.png';
import tiledJson from './res/map/neon-nights-map.json';
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
      debug: true,
    },
  },
  scene: { preload, create, update },
};

var game = new Phaser.Game(config);
var player;

function preload() {
  this.load.image('tiles', tileSetImage);
  this.load.tilemapTiledJSON('tilemap', tiledJson);
  this.load.spritesheet('cora', coraSheet, {
    frameWidth: 71,
    frameHeight: 67,
  });
}

function create() {
  const map = this.make.tilemap({ key: 'tilemap' });
  const tileset = map.addTilesetImage('tileset', 'tiles');

  map.createStaticLayer('Background', tileset);
  const platforms = map.createStaticLayer('Platform', tileset);
  map.createStaticLayer('Ladder', tileset);

  platforms.setCollisionByProperty({ collisionBody: true });

  player = this.physics.add.sprite(0, 0, 'cora').setSize(30, 64);
  player.setBounce(0.1);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, platforms);

  const debugGraphics = this.add.graphics().setAlpha(0.7);
  platforms.renderDebug(debugGraphics, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(244, 244, 45, 50),
    faceColor: new Phaser.Display.Color(45, 56, 37, 255),
  });

  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('cora', { start: 0, end: 2 }),
    frameRate: FPS,
    repeat: -1,
  });
  this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNumbers('cora', { start: 7, end: 14 }),
    frameRate: FPS,
    repeat: -1,
  });
  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('cora', { start: 3, end: 6 }),
    frameRate: FPS,
    repeat: -1,
  });
  player.faceRight = true;
  this.cameras.main.startFollow(player, true, 0.05, 0.05);
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();

  if (cursors.left.isDown) {
    player.setVelocityX(-SPEED);
    player.anims.play('run', true);
    player.faceRight = false;
  } else if (cursors.right.isDown) {
    player.setVelocityX(SPEED);
    player.anims.play('run', true);
    player.faceRight = true;
  } else {
    player.setVelocityX(0);
    player.anims.play('idle', true);
  }
  if (cursors.up.isDown) {
    player.setVelocityY(-330);
    player.anims.play('jump', true);
  }
  player.flipX = !player.faceRight;
}
