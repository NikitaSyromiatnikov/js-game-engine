import { throws } from "assert";
import EntityBase from "../../../../modules/entity";

type Star = {
  x: number;
  y: number;
};

// Star width and height euquals 2

const STAR_COLORS = [
  "#FFFACD",
  "#FFFFE0",
  "#FAFAD2",
  "#FFE4B5",
  "#FFFF00",
  "#FFFFFF",
];

class StarsSet extends EntityBase {
  private stars: Star[] = [];
  private speed: number = 5;
  private width: number = 4;
  private height: number = 4;

  constructor(private numberOfStars: number) {
    super();

    for (let i = 0; i < this.numberOfStars; i++) {
      this.stars.push(this.createInitialStar());
    }
  }

  draw(): void {
    this.removeStars();
    this.addStars();
    this.stars.forEach((star) => {
      if (this.initialized && this.context2D) {
        this.context2D.fillStyle =
          STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
        this.context2D?.fillRect(star.x, star.y, this.width, this.height);
      }
    });
  }

  update(): void {
    this.stars = this.stars.map((star) => ({
      ...star,
      x: star.x - this.speed,
    }));
  }

  createInitialStar() {
    return {
      x: Math.floor(Math.random() * 1500),
      y: Math.floor(Math.random() * 600),
    };
  }

  createStar() {
    return {
      x: Math.floor(Math.random() * 1000) + 1000,
      y: Math.floor(Math.random() * 600),
    };
  }

  removeStars() {
    this.stars = this.stars.filter((star) => {
      return star.x >= 0 - this.width;
    });
  }

  addStars() {
    let starsToAdd = this.numberOfStars - this.stars.length;

    for (let i = 0; i < starsToAdd; i++) {
      this.stars.push(this.createStar());
    }
  }
}

export default StarsSet;
