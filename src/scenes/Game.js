import Phaser from 'phaser';
import TextureKeys from '../consts/TextureKeys';
import AnimKeys from '../consts/AnimKeys';
import { SPEED } from '../consts/Setting';
import Player from '../objects/Player';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // Background
    this.add
      .tileSprite(0, 100, width, height, TextureKeys.skyline)
      .setOrigin(0, 0)
      .setScrollFactor(0, 0);

    this.buildings = this.add
      .tileSprite(-100, 640, width * 3, 450, TextureKeys.building)
      .setScrollFactor(0.2)
      .setOrigin(0, 1);

    this.nearBuildings = this.add
      .tileSprite(-100, 640, width * 3, 450, TextureKeys.buildingLarge)
      .setScrollFactor(0.5)
      .setOrigin(0, 1);

    this.map = this.make.tilemap({ key: TextureKeys.tileMap });
    this.tileset = this.map.addTilesetImage('tileset', TextureKeys.tileSet);

    this.map.createLayer('Background', this.tileset);
    this.platforms = this.map.createLayer('Platform', this.tileset);
    this.map.createLayer('Ladder', this.tileset);

    this.platforms.setCollisionByProperty({ collisionBody: true });

    this.player = new Player(this, 0, 0);
    this.add.existing(this.player);
    this.physics.add.collider(this.player, this.platforms);

    // const debugGraphics = this.add.graphics().setAlpha(0.7);
    // this.platforms.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(244, 244, 45, 50),
    //   faceColor: new Phaser.Display.Color(45, 56, 37, 255),
    // });

    this.player.faceRight = true;

    this.cameras.main.setBounds(-100, 0, this.map.displayWidth, 640);
    this.cameras.main.startFollow(this.player, false, 0.1, 0.1);
    this.cameras.main.setZoom(2);
  }
}
