import Phaser from 'phaser';
import TextureKeys from '../consts/TextureKeys';
import AnimKeys from '../consts/AnimKeys';
import { SPEED } from '../consts/Setting';

export default class Player extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.lowerBound = scene.scale.height;

    this.sprite = scene.add.sprite(x, y, TextureKeys.playerSprites);
    this.add(this.sprite);
    scene.physics.add.existing(this);

    this.body.setSize(30, 60);
    this.body.setOffset(-15, -28);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  preUpdate() {
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-SPEED);
      if (this.body.onFloor()) this.sprite.anims.play(AnimKeys.Run, true);
      this.sprite.faceRight = false;
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(SPEED);
      if (this.body.onFloor()) this.sprite.anims.play(AnimKeys.Run, true);
      this.sprite.faceRight = true;
    } else {
      this.body.setVelocityX(0);
      if (this.body.onFloor()) this.sprite.anims.play(AnimKeys.Idle, true);
    }
    if (this.cursors.space.isDown && this.body.onFloor()) {
      this.body.setVelocityY(-250);
      this.sprite.anims.play(AnimKeys.Jump, true);
    }

    if (this.y >= this.lowerBound) this.y = 0;
    this.sprite.flipX = !this.sprite.faceRight;
  }
}
