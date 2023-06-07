const score = new Score();
const gReady = new getReady();
const gOver = new gameOver();
const bg = new Background();
const fg = new Foreground();
const bird = new Bird();
const pipes = new Pipes();


function draw() {
  context.fillStyle = "#25a1da";
  context.fillRect(0, 0, canvas.width, canvas.height);

  bg.draw();
  pipes.draw();
  fg.draw();
  bird.draw();
  gReady.draw();
  gOver.draw();
  score.draw();
}


function resetGame() {
  pipes.reset();
  bird.speedReset();
  score.reset();
  bg.draw();
  
  state.current = state.gReady;
}


function loop() {
  let currentTime = performance.now();
  let elapsed = currentTime - lastFrameTime;
  if (elapsed < frameDelay) {
    setTimeout(loop, frameDelay - elapsed);
    return;
  }

  lastFrameTime = currentTime;
  
  pipes.update();
  bird.update();
  draw();
  frames++;
  
  requestAnimationFrame(loop);
}

let lastFrameTime = performance.now();
score.bestScore = 0;
loop();