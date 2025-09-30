const GRID = 2;
const CELL = 1080 / GRID;


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  noLoop();
}

function draw() {
  background(255, 255, 220);

    for (let gy = 0; gy < GRID; gy++) {
    const cy = gy * CELL + CELL / 2;

  push();
  fill('pink');
  rectMode(CENTER);
  rect(cy, cy, 380, 380);
  pop();

  push();
  blendMode(MULTIPLY);
  translate(cy, cy);
  fill('lightblue');
  const sz = random(300, 500);
  circle(0, 0, sz);
  pop();
}
}