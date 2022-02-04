import Scene from "../../scene";

export interface IGame {
  paused: boolean;
  scenes: Scene[];
  update: () => void;
}
