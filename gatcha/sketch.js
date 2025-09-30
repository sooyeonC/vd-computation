let body;
let face;

function preload() {
  body = loadImage('gatcha-images/body.png');
  face = loadImage('gatcha-images/1.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(body, 0, 0);
}
