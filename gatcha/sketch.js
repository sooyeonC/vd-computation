let body;
let face;

function preload() {
  body = loadImage('body.png');
  face = loadImage('1.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(body, 0, 0);
}
