class Bird {
  constructor() {
    this.frames = [
      { spriteX: 276, spriteY: 112 },
      { spriteX: 276, spriteY: 139 },
      { spriteX: 276, spriteY: 164 },
    ];
    this.size = [32, 26];
    this.x = 50;
    this.y = 150;
    this.radius = 12;

    this.frame = 0;
    this.direction = 1;

    this.gravity = 0.3;
    this.speed = 3;
    this.jump = 0;
    this.rotation = 0;
    this.period = 0;
  }

  draw() {
    let bird = this.frames[this.frame];

    context.save(); 

    context.translate(this.x, this.y); 
    context.rotate(this.rotation);
    context.drawImage(
      sprite,
      bird.spriteX,
      bird.spriteY,
      this.size[0],
      this.size[1],
      -this.size[0] / 2,
      -this.size[1] / 2, 
      this.size[0],
      this.size[1]
    );

    context.restore(); 
  }

 
  update() {
    this.period = state.current === state.gReady ? 6 : 4; 
    this.frame += frames % this.period == 0 ? 1 : 0;
    this.frame = this.frame % this.frames.length;

    if (state.current === state.gReady) {
      this.y = 200;
      this.rotation = 0 * DEGREE;
    } else {
      this.downfall();
      if (this.jump >= this.speed) {
        this.rotation = 90 * DEGREE;
        this.frame = 0;
      } else {
        this.rotation = -25 * DEGREE;
      }
    }
  }
  
  downfall() {
    this.jump += this.gravity;
    this.y += this.jump;
    this.fgContact();
  }


  uplift() {
    this.jump = -this.speed;
  }


  fgContact() {
    if (this.y + this.size[1] / 2 >= fg.fg.y) {
      this.y = fg.fg.y - this.size[1] / 2;
      if (state.current === state.game) {
        state.current = state.gOver;
        DIE.play();
      }
    }
  }

  clickBird() {
    if (bird.y - bird.radius > 0) {
      bird.uplift();
      FLAP.play();
    }
  }

  speedReset() {
    this.jump = 0;
  }
}