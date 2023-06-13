import Phaser from 'phaser';
import tileSetImage from '../assets/map/tileset.png';
import tiledJson from '../assets/map/neon-nights-map.json';
import spriteSheet from '../assets/player/spritesheet.png';
import skylineImg from '../assets/background/skyline.png';
import buildingImg from '../assets/background/buildings-bg.png';
import nearBuildingImg from '../assets/background/near-buildings-bg.png';
import TextureKeys from '../consts/TextureKeys';

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
    this.scene.start('game');
  }
}
