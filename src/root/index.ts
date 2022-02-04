// Root file (like main.c)
// Start your game development here

import Game from "../modules/game";
import Scene from "../modules/scene";
import Player from "./entities/game/player";
import RootGameCanvas from "./entities/game/root-canvas";
import StarsSet from "./entities/game/stars";

// Game Scene entities
const player = new Player();
const starsSet = new StarsSet(44);
const rootGameCanvas = new RootGameCanvas();

// Scenes
const menuScene = new Scene({ active: false });
const gameScene = new Scene({
  active: true,
  gameObjects: [rootGameCanvas, player, starsSet],
});

// Game Instance
const game = new Game({
  scenes: [menuScene, gameScene],
  intervalTime: 1000 / 30,
});

game.start();
