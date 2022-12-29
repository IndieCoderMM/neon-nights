import Phaser from 'phaser';
import tileSetImage from './res/map/tileset.png';
import tiledJson from './res/map/neon-nights-map.json';
import coraSheet from './res/player/spritesheet.png';
import skylineImg from './res/background/skyline.png';
import buildingImg from './res/background/buildings-bg.png';
import nearBuildingImg from './res/background/near-buildings-bg.png';

const WIDTH = 800;
const HEIGHT = 450;
const SPEED = 150;
const FPS = 5;

var config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  pixelArt: true,
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
var buildings;
var nearBuildings;

function preload() {
  this.load.image('tiles', tileSetImage);
  this.load.image('skyline', skylineImg);
  this.load.image('buildings', buildingImg);
  this.load.image('near-buildings', nearBuildingImg);
  this.load.tilemapTiledJSON('tilemap', tiledJson);
  this.load.spritesheet('cora', coraSheet, {
    frameWidth: 71,
    frameHeight: 67,
  });
}

function create() {
  // Parallax
  const width = this.scale.width;
  const height = this.scale.height;
  const skyline = this.add
    .tileSprite(0, 0, width, height, 'skyline')
    .setScrollFactor(0)
    .setOrigin(0);
  buildings = this.add
    .tileSprite(-100, 640, width * 3, 450, 'buildings')
    .setOrigin(0, 1);
  nearBuildings = this.add
    .tileSprite(-100, 640, width * 3, 450, 'near-buildings')
    .setOrigin(0, 1);
  const map = this.make.tilemap({ key: 'tilemap' });
  const tileset = map.addTilesetImage('tileset', 'tiles');

  map.createLayer('Background', tileset);
  const platforms = map.createLayer('Platform', tileset);
  map.createLayer('Ladder', tileset);

  platforms.setCollisionByProperty({ collisionBody: true });

  player = this.physics.add.sprite(0, 0, 'cora').setSize(30, 64);
  player.setBounce(0.1);

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

  this.cameras.main.setBounds(-100, 0, map.displayWidth, 640);
  this.cameras.main.startFollow(player, false, 0.1, 0.1);
  this.cameras.main.setZoom(2);
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown) {
    player.setVelocityX(-SPEED);
    if (player.body.onFloor()) player.anims.play('run', true);
    player.faceRight = false;
    buildings.tilePositionX -= 0.05;
    nearBuildings.tilePositionX -= 0.5;
  } else if (cursors.right.isDown) {
    player.setVelocityX(SPEED);
    if (player.body.onFloor()) player.anims.play('run', true);
    player.faceRight = true;
    buildings.tilePositionX += 0.05;
    nearBuildings.tilePositionX += 0.5;
  } else {
    player.setVelocityX(0);
    if (player.body.onFloor()) player.anims.play('idle', true);
  }
  if (cursors.up.isDown && player.body.onFloor()) {
    player.setVelocityY(-250);
    player.anims.play('jump', true);
  }
  player.flipX = !player.faceRight;
}
