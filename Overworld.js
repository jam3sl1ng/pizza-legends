class Overworld {

  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    // Background 'Demo Lower' area
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    };
    image.src = "/images/maps/DemoLower.png";

    // Place game objects
    const hero = new GameObject({
      x: 5,
      y: 6
    });
    const npc = new GameObject({
      x: 7,
      y: 9,
      src: "/images/characters/people/npc1.png"
    });

    // Draw game objects
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc.sprite.draw(this.ctx);
    }, 200)
  }

}