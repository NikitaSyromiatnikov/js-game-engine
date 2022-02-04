import Scene from "../scene";
import type { IGame } from "./types";

class Game implements IGame {
  paused: boolean;
  scenes: Scene[];
  interval: NodeJS.Timeout | null = null;
  intervalTime: number = 1000 / 30;

  constructor({
    scenes,
    intervalTime,
  }: {
    scenes: Scene[];
    intervalTime?: number;
  }) {
    this.paused = true;
    this.scenes = scenes;

    if (intervalTime) {
      this.intervalTime = intervalTime;
    }
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.update();
        this.draw();
      }, this.intervalTime);
    }

    this.paused = false;
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.paused = true;
  }

  getActiveScenes() {
    return this.scenes.filter((scene) => Boolean(scene.isActive));
  }

  update() {
    const activeScenes = this.getActiveScenes();

    activeScenes.forEach((scene) => {
      scene.gameObjects.forEach((object) => object.update());
    });
  }

  draw() {
    this.getActiveScenes().forEach((scene) => {
      scene.gameObjects.forEach((object) => object.draw());
    });
  }
}

export default Game;
