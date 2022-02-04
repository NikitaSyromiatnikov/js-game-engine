import type { IGameObject } from "./types";

class GameObjectBase implements IGameObject {
  constructor() {}

  update() {
    throw new Error("You must override the GameObjectBase update method");
  }
}

export default GameObjectBase;
