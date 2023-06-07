class getReady {
  constructor() {
    this.img = {
      spriteX: 0,
      spriteY: 228,
      width: 173,
      height: 161,
      x: 114,
      y: 100,
    };
  }
  
  draw() {
    if (state.current === state.gReady) {
      context.drawImage(
        sprite,
        this.img.spriteX,
        this.img.spriteY,
        this.img.width,
        this.img.height,
        this.img.x,
        this.img.y,
        this.img.width,
        this.img.height
      );
    }
  }
}


class gameOver {
  img = {
    spriteX: 175,
    spriteY: 228,
    width: 225,
    height: 202,
    x: 90,
    y: 100,
  };

  medal = {
    golden: { spriteX: 312, spriteY: 155 },
    silver: { spriteX: 312, spriteY: 111 },
    bronze: { spriteX: 357, spriteY: 155 },
    platinum: { spriteX: 357, spriteY: 111 },
    source: { spriteW: 48, spriteH: 48, x: 110, y: 185 },
  };

  draw() {
    if (state.current !== state.gOver) return;

    context.drawImage(
      sprite,
      this.img.spriteX,
      this.img.spriteY,
      this.img.width,
      this.img.height,
      this.img.x,
      this.img.y,
      this.img.width,
      this.img.height
    );

    let { golden, silver, bronze, platinum, source } = this.medal;

    let drawMedal;
    if (score.currentScore >= 0 && score.currentScore < 10) {
      drawMedal = bronze;
    } else if (score.currentScore >= 10 && score.currentScore < 20) {
      drawMedal = silver;
    } else if (score.currentScore >= 20 && score.currentScore < 30) {
      drawMedal = golden;
    } else if (score.currentScore >= 30) {
      drawMedal = platinum;
    }
    context.drawImage(
      sprite,
      drawMedal.spriteX,
      drawMedal.spriteY,
      source.spriteW,
      source.spriteH,
      source.x,
      source.y,
      source.spriteW,
      source.spriteH
    );
  }
}