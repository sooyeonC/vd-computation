let body;
let face;

function preload() {
  body = loadImage('gatcha-images/body.png');
   let n = int(random(1, 5));
   let m = int(random(0, 256));
   let imgName = n + ".png";
   face = loadImage("gatcha-images/" + imgName);
}

function setup() {
  createCanvas(400, 400);
   let button = createButton('🤗');
  button.position(10, 10);

  button.mousePressed(() => {
   let n = int(random(1, 5));
   let imgName = n + ".png";
   face = loadImage("gatcha-images/" + imgName);
  });  
}

function draw() {
    background('beige');
  image(body, 0, 0);
  image(face, 132, 134);

}
