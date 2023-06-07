canvas.addEventListener("click", (event) => {
  

  const { left, top } = canvas.getBoundingClientRect();
  const clickX = event.clientX - left;
  const clickY = event.clientY - top;


  if (state.current === state.gReady) {
    state.current = state.game;
    SWOOSH.play();
  } else if (state.current === state.game) {
    event.preventDefault();
    bird.clickBird();
  } else if (state.current === state.gOver && clickStart(clickX, clickY)) {
    resetGame();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    bird.clickBird();
  }
});

function clickStart(clickX, clickY) {
  const { x, y, w, h } = buttonStart;
  return clickX > x && clickX < x + w && clickY > y && clickY < y + h;
}

const buttonStart = {
  x: 120,
  y: 263,
  w: 83,
  h: 29,
};