import { AnimatedSprite } from './sprite.js';

const GRAVITY = 1;

export class Player extends AnimatedSprite {
  constructor({ canvas, images, x, y, duration }) {
    super({ canvas, images, x, y, duration });
    this.gravity = GRAVITY;
    this.vel = {
      x: 0,
      y: 0,
    };
    this.jumping = false;
  }

  isOnFloor(sprite) {
    const isAbove =
      this.pos.y + this.height <= sprite.pos.y &&
      this.pos.y + this.height + this.vel.y >= sprite.pos.y;
    const isWithin =
      this.pos.x >= sprite.pos.x &&
      this.pos.x + this.width <= sprite.pos.x + sprite.width;
    return isAbove && isWithin;
  }

  update(winHeight) {
    this.pos.y += this.vel.y;
    this.pos.x += this.vel.x;

    if (this.pos.y + this.height + this.vel.y < winHeight) {
      this.vel.y += this.gravity;
    } else {
      this.vel.y = 0;
      this.jumping = false;
    }
  }
  draw() {
    this.animate();
    super.draw();
  }
}
