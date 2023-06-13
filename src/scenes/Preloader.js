import Phaser from 'phaser';
import tileSetImage from '../assets/map/tileset.png';
import tiledJson from '../assets/map/neon-nights-map.json';
import spriteSheet from '../assets/player/spritesheet.png';
import skylineImg from '../assets/background/skyline.png';
import buildingImg from '../assets/background/buildings-bg.png';
import nearBuildingImg from '../assets/background/near-buildings-bg.png';
import TextureKeys from '../consts/TextureKeys';
import AnimKeys from '../consts/AnimKeys';
import { FPS } from '../consts/Setting';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image(TextureKeys.tileSet, tileSetImage);
    this.load.image(TextureKeys.skyline, skylineImg);
    this.load.image(TextureKeys.building, buildingImg);
    this.load.image(TextureKeys.buildingLarge, nearBuildingImg);
    this.load.tilemapTiledJSON(TextureKeys.tileMap, tiledJson);
    this.load.spritesheet(TextureKeys.playerSprites, spriteSheet, {
      frameWidth: 71,
      frameHeight: 67,
    });
  }

  create() {
    this.createAnimations();
    this.scene.start('game');
  }

  private;

  createAnimations() {
    this.anims.create({
      key: AnimKeys.Idle,
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 0,
        end: 2,
      }),
      frameRate: FPS,
      repeat: -1,
    });
    this.anims.create({
      key: AnimKeys.Run,
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 7,
        end: 14,
      }),
      frameRate: FPS,
      repeat: -1,
    });
    this.anims.create({
      key: AnimKeys.Jump,
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 3,
        end: 6,
      }),
      frameRate: FPS,
      repeat: -1,
    });
  }
}
