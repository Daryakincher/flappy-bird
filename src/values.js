const state = {
  current: 0,
  gReady: 0,
  game: 1,
  gOver: 2,
};

let index = 0;
let frames = 0;
let SPEED = 3.0;

let frameRate = 60; 
let frameDelay = 1000 / frameRate; 

const DEGREE = Math.PI / 180;