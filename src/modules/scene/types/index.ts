import type GameObjectBase from "../../game-object";

export interface IScene {
  isActive: boolean;
  gameObjects: Array<GameObjectBase>;
}
