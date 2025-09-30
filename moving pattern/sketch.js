const GRID = 32;
const CELL = 1080 / GRID;
let isDaytime = false;


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  //  noLoop();
  frameRate(6);
  const currentHour = hour();
  isDaytime = (currentHour >= 7 && currentHour < 19);
}

function draw() {
  background(255, 255, 220);
  if (isDaytime == true) {
    background('light yellow');
  } else {
    background('indigo');
  }
  const cz = random(40, CELL - 4);
  const sz = random(0, CELL - 40);

  for (let gy = 0; gy < GRID; gy++) {
    for (let gx = 0; gx < GRID; gx++) {
      const cx = gx * CELL + CELL / 2;
      const cy = gy * CELL + CELL / 2;

      push();
      fill('#afff00');
      rotate(QUARTER_PI);
      rectMode(CENTER);
      rect(cx, cy, cz, cz);
      pop();

      push();
      blendMode(NORMAL);
      translate(cx, cy);

      fill('#49c6e7');
      circle(0, 0, sz);
      pop();

      push();
      strokeWeight(0.5);
      stroke('pink');
      line(1080-cx, cx/5, 1080-cx/50,1080-cx);
      pop();

      /*
      push();
      translate(width / 2, height / 2); // move origin to canvas center
      rotate(random(TWO_PI));       // random rotation
      const s = random(300, 500);   // side length
      const h = (sqrt(3) / 2) * s;  // height of equilateral triangle
      fill('cyan');
      triangle(-s / 2, h / 3, s / 2, h / 3, 0, -2 * h / 3);
      pop();
      */
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}