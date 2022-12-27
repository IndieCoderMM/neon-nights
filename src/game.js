import { Player } from './modules/player.js';
// import { Platform } from './modules/platform.js';

const WIDTH = 800;
const HEIGHT = 450;

const importImages = (req) => req.keys().map(req);

const idleImages = importImages(
  require.context('./res/player/idle/', false, /\.png$/)
);
const jumpImages = importImages(
  require.context('./res/player/jump/', false, /\.png$/)
);
const runImages = importImages(
  require.context('./res/player/run/', false, /\.png$/)
);

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

const player = new Player({
  canvas: c,
  images: idleImages,
  x: 10,
  y: 10,
  duration: 150,
});

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

const run = () => {
  requestAnimationFrame(run);
  c.fillStyle = 'blue';
  c.fillRect(0, 0, canvas.width, canvas.height);
  // platforms.forEach((platform) => {
  //   platform.draw(c, 'green');
  // });
  player.update(canvas.height);
  if (keys.right.pressed && player.pos.x < canvas.width / 2 - 50) {
    player.images = runImages;
    player.vel.x = 5;
  } else if (keys.left.pressed && player.pos.x > 50) {
    player.vel.x = -5;
  } else {
    player.images = idleImages;
    player.vel.x = 0;
    // if (keys.right.pressed) {
    //   platforms.forEach((platform) => {
    //     platform.pos.x -= 5;
    //   });
    // } else if (keys.left.pressed) {
    //   platforms.forEach((platform) => {
    //     platform.pos.x += 5;
    //   });
    // }
  }
  if (player.jumping) {
    player.images = jumpImages;
  }
};

run();

addEventListener('keydown', ({ key }) => {
  if (key == 'ArrowLeft' || key == 'a') {
    keys.left.pressed = true;
  } else if (key == 'ArrowRight' || key == 'd') {
    keys.right.pressed = true;
  } else if (key == 'ArrowUp' || key == 'w') {
    player.vel.y -= 20;
    player.jumping = true;
  }
});

addEventListener('keyup', ({ key }) => {
  if (key == 'ArrowLeft' || key == 'a') {
    keys.left.pressed = false;
  } else if (key == 'ArrowRight' || key == 'd') {
    keys.right.pressed = false;
  }
});
