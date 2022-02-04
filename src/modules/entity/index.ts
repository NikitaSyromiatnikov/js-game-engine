import GameObjectBase from "../game-object";
import { IEntity } from "./types";

class EntityBase extends GameObjectBase implements IEntity {
  drawableArea: HTMLCanvasElement | null = null;
  initialized: boolean = false;
  context2D: CanvasRenderingContext2D | null | undefined = null;
  global = window;

  constructor() {
    super();

    this.onInitialize();
  }

  onInitialize() {
    this.drawableArea = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement | null;
    this.initialized = true;
    this.context2D = this.drawableArea?.getContext("2d");
  }

  getCanvas(): HTMLElement | null {
    console.log("GETTING CANVAS");
    return document.getElementById("canvas");
  }

  draw(): void {
    throw new Error("You must override the draw method of EntityBase");
  }
}

export default EntityBase;
