import EntityBase from "../../../../modules/entity";

class RootGameCanvas extends EntityBase {
  private width: number;
  private height: number;
  private r: number = 0;
  private g: number = 0;
  private b: number = 0;
  private color: string;
  private fade: boolean = false;

  constructor() {
    super();

    this.width = 1000;
    this.height = 600;
    this.color = this.getColor();
  }

  draw(): void {
    if (this.initialized && this.drawableArea && this.context2D) {
      this.context2D.fillStyle = this.color;
      this.context2D.fillRect(0, 0, this.width, this.height);
    }
  }

  update(): void {
    if (this.r === 50) {
      this.fade = true;
    }

    if (this.r === 0) {
      this.fade = false;
    }

    if (!this.fade) {
      this.r += 1;
      this.g += 1;
      this.b += 1;
    } else {
      this.r -= 1;
      this.g -= 1;
      this.b -= 1;
    }

    this.r = this.checkAndCorrect(this.r);
    this.g = this.checkAndCorrect(this.g);
    this.b = this.checkAndCorrect(this.b);
    this.color = this.getColor();
  }

  getColor() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  checkAndCorrect(num: number) {
    return num > 50 ? 0 : num;
  }
}

export default RootGameCanvas;
