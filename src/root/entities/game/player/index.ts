import { CLIENT_RENEG_LIMIT } from "tls";
import EntityBase from "../../../../modules/entity";

class Player extends EntityBase {
  private x: number = (1000 - 50) / 2;
  private y: number = (600 - 50) / 2;
  private width: number = 50;
  private height: number = 50;
  private color: string = "cyan";
  private moves: string[] = [];
  private distancePerMove = 3;

  constructor() {
    super();

    if (!this.drawableArea) {
      return;
    }

    this.global.addEventListener("keydown", (ev: KeyboardEvent) => {
      this.onEvent(ev);
    });
  }

  update(): void {
    this.moves.forEach((move) => {
      switch (move) {
        case "ArrowUp":
          this.y -= this.distancePerMove;
          return;

        case "ArrowDown":
          this.y += this.distancePerMove;
          return;

        case "ArrowLeft":
          this.x -= this.distancePerMove;
          return;

        case "ArrowRight":
          this.x += this.distancePerMove;
          return;

        default:
          return;
      }
    });
    // The lines below are to get an icy effect
    if (this.moves.length) {
      this.moves = [this.moves[this.moves.length - 1]];
    }
    this.checkBounds();
  }

  checkBounds() {
    if (this.moves.length) {
      let lastMove = this.moves[this.moves.length - 1];

      if (this.x <= 0 || this.x >= 1000 - this.width) {
        this.moves = [lastMove === "ArrowLeft" ? "ArrowRight" : "ArrowLeft"];
        console.log("OOB");
      }

      if (this.y < 0 || this.y >= 600 - this.height) {
        this.moves = [lastMove === "ArrowDown" ? "ArrowUp" : "ArrowDown"];
        console.log("OOB");
      }
    }
  }

  draw(): void {
    if (this.initialized && this.drawableArea && this.context2D) {
      this.context2D.fillStyle = "white";
      this.context2D.fillRect(this.x, this.y, this.width, this.height);
      this.context2D.fillStyle = this.color;
    }
  }

  onEvent(ev: KeyboardEvent) {
    if (
      ev.key === "ArrowUp" ||
      ev.key === "ArrowDown" ||
      ev.key === "ArrowLeft" ||
      ev.key === "ArrowRight"
    ) {
      this.moves.push(ev.key);
    }

    if (ev.key === " ") {
      this.moves = [];
    }
  }
}

export default Player;
