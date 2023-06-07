class Score {
    constructor() {}
    bestScore = parseInt(localStorage.getItem("bestScore")) || 0;
    currentScore = 0;
  
    draw() {
      if (state.current === state.game) {
        context.lineWidth = 2;
        context.font = "25px 'Bruno Ace SC', cursive";
        context.strokeStyle = "#c11226";
        context.strokeText(this.currentScore, 195, 50);
      } else if (state.current === state.gOver) {
        context.font = "25px 'Bruno Ace SC', cursive";
       
        context.strokeText(this.currentScore, 260, 198);
      
        context.strokeText(this.bestScore, 260, 238);
      }
    }
  
    reset() {
      this.currentScore = 0;
    }
  }