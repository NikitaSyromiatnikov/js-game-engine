import EntityBase from "../entity";
import GameObjectBase from "../game-object";
import type { IScene } from "./types";

class Scene implements IScene {
  isActive: boolean;
  gameObjects: EntityBase[];

  constructor({
    active,
    gameObjects,
  }: {
    active?: boolean;
    gameObjects?: EntityBase[];
  }) {
    this.isActive = active ?? false;
    this.gameObjects = gameObjects ?? [];
  }
}

export default Scene;
