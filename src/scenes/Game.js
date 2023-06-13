import Phaser from 'phaser';
import TextureKeys from '../consts/TextureKeys';

const SPEED = 150;
const FPS = 5;

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  create() {
    // Parallax
    const width = this.scale.width;
    const height = this.scale.height;
    const skyline = this.add
      .tileSprite(0, 0, width, height, TextureKeys.skyline)
      .setScrollFactor(0)
      .setOrigin(0);
    this.buildings = this.add
      .tileSprite(-100, 640, width * 3, 450, TextureKeys.building)
      .setOrigin(0, 1);
    this.nearBuildings = this.add
      .tileSprite(-100, 640, width * 3, 450, TextureKeys.buildingLarge)
      .setOrigin(0, 1);

    this.map = this.make.tilemap({ key: TextureKeys.tileMap });
    this.tileset = this.map.addTilesetImage('tileset', TextureKeys.tileSet);

    this.map.createLayer('Background', this.tileset);
    this.platforms = this.map.createLayer('Platform', this.tileset);
    this.map.createLayer('Ladder', this.tileset);

    this.platforms.setCollisionByProperty({ collisionBody: true });

    this.player = this.physics.add
      .sprite(0, 0, TextureKeys.playerSprites)
      .setSize(30, 64);
    this.player.setBounce(0.1);

    this.physics.add.collider(this.player, this.platforms);

    const debugGraphics = this.add.graphics().setAlpha(0.7);

    this.platforms.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(244, 244, 45, 50),
      faceColor: new Phaser.Display.Color(45, 56, 37, 255),
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 0,
        end: 2,
      }),
      frameRate: FPS,
      repeat: -1,
    });
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 7,
        end: 14,
      }),
      frameRate: FPS,
      repeat: -1,
    });
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers(TextureKeys.playerSprites, {
        start: 3,
        end: 6,
      }),
      frameRate: FPS,
      repeat: -1,
    });
    this.player.faceRight = true;

    this.cameras.main.setBounds(-100, 0, this.map.displayWidth, 640);
    this.cameras.main.startFollow(this.player, false, 0.1, 0.1);
    this.cameras.main.setZoom(2);
  }

  update(time, delta) {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.player.setVelocityX(-SPEED);
      if (this.player.body.onFloor()) this.player.anims.play('run', true);
      this.player.faceRight = false;
      this.buildings.tilePositionX -= 0.05;
      this.nearBuildings.tilePositionX -= 0.5;
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(SPEED);
      if (this.player.body.onFloor()) this.player.anims.play('run', true);
      this.player.faceRight = true;
      this.buildings.tilePositionX += 0.05;
      this.nearBuildings.tilePositionX += 0.5;
    } else {
      this.player.setVelocityX(0);
      if (this.player.body.onFloor()) this.player.anims.play('idle', true);
    }
    if (cursors.up.isDown && this.player.body.onFloor()) {
      this.player.setVelocityY(-250);
      this.player.anims.play('jump', true);
    }
    this.player.flipX = !this.player.faceRight;
  }
}
