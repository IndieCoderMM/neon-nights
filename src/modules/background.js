import { Sprite } from './sprite.js';

export class ParallaxBackground extends Sprite {
  constructor({ canvas, img, width, height }) {
    super({ canvas, img, x: 0, y: 0 });
    this.pos.x = -this.width * 2;
    this.winWidth = width;
    this.winHeight = height;
  }
  draw() {
    if (!this.ready) return;
    // * Resetting the background position
    if (this.pos.x <= -this.width * 3 || this.pos.x >= -this.width) {
      this.pos.x = -this.width * 2;
    }
    // * Filling the canvas
    for (
      let i = this.pos.x;
      i < this.winWidth + this.width * 4;
      i += this.width * 2
    ) {
      this.canvas.drawImage(
        this.img,
        this.pos.x + i,
        this.pos.y,
        this.width * 2,
        this.winHeight
      );
    }
  }
}
