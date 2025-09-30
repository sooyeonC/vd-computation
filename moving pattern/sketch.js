const GRID = 16;
const CELL = 1080 / GRID;


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  //noLoop();
  frameRate(6);
}

function draw() {
  background(255, 255, 220);
  const cz = random(60, CELL);
  const sz = random(60, CELL + 20);

  for (let gy = 0; gy < GRID; gy++) {
    for (let gx = 0; gx < GRID; gx++) {
      const cx = gx * CELL + CELL / 2;
      const cy = gy * CELL + CELL / 2;

      push();
      fill('pink');
      rectMode(CENTER);
      rect(cx, cy, cz, cz);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(cx, cy);
      fill('lightblue');
      circle(0, 0, sz);
      pop();
      push();
      translate(width / 2, height / 2); // move origin to canvas center
      rotate(random(TWO_PI));       // random rotation
      const s = random(300, 500);   // side length
      const h = (sqrt(3) / 2) * s;  // height of equilateral triangle
      fill('cyan');
      triangle(-s / 2, h / 3, s / 2, h / 3, 0, -2 * h / 3);
      pop();
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}