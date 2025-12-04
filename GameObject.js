class GameObject {

  constructor(config) {
    // Default to (0,0) and 'hero' unless specified
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "/images/characters/people/hero.png",
    });
  }

}