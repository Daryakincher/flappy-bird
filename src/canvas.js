const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const sprite = new Image();
sprite.src = "sprite.png";

const DIE = new Audio();
DIE.src = "audio/die.wav";

const FLAP = new Audio();
FLAP.src = "audio/flap.wav";

const HIT = new Audio();
HIT.src = "audio/hit.wav";

const POINT = new Audio();
POINT.src = "audio/point.wav";

const SWOOSH = new Audio();
SWOOSH.src = "audio/swooshing.wav";
