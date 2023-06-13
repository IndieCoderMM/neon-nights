import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Game from './scenes/Game';

const config = {
  type: Phaser.AUTO,
  width: '100%',
  height: '100vh',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [Preloader, Game],
};

document.body.style.overflow = 'hidden';
document.body.style.margin = '0';

export default new Phaser.Game(config);
