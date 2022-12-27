export class Sprite {
  constructor({ canvas, img, x, y }) {
    this.canvas = canvas;
    this.img = new Image();
    this.img.onload = () => {
      this.ready = true;
    };
    this.img.src = img;
    this.width = this.img.width;
    this.height = this.img.height;
    this.pos = { x, y };
  }

  draw() {
    if (!this.ready) return;
    this.canvas.drawImage(this.img, this.pos.x, this.pos.y);
  }

  // draw(context) {
  // context.fillStyle = color;
  // context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  //   if (!this.ready) return;
  //   context.drawImage(this.img, this.pos.x, this.pos.y);
  // }
}

export class AnimatedSprite extends Sprite {
  constructor({ canvas, images, x, y, duration }) {
    super({ canvas, img: images[0], x, y });
    this.duration = duration;
    this.images = images;
    this.timeStamp = Date.now();
    this.animTrigger = false;
  }

  nextImage() {
    const shifted = this.images.shift();
    this.images.push(shifted);
    this.img.src = this.images[0];
  }

  animate() {
    this.animTrigger = false;
    const now = Date.now();
    if (now - this.timeStamp > this.duration) {
      this.timeStamp = now;
      this.animTrigger = true;
    }
    if (this.animTrigger) this.nextImage();
  }
}
