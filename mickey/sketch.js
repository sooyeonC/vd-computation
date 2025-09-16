function setup() {
  createCanvas(600, 600);
}
let a;
let c;
c=10
a=200

function draw() {
  background(0,77,255);
  
  fill(a);
  noStroke();
  //hands
  square(170, 176,94);
      stroke(c);
      strokeCap(PROJECT);
  strokeWeight(20);
  line(106, 306, 374, 246);
  line(240, 200, 400, 210);
  line(306, 496, 366, 416);
  line(439, 402, 447, 514);
  noStroke();
  square(54, 238,94);

  //shoes
  square(243, 471,94);
  square(384, 471,94);
fill(c);
   //body
  square(342, 238,156);

fill(a);
  //face
  square(295, 129,156);
    //pants
  square(326, 360,94);
  square(420, 347,94);
  fill(c);
  //ears
  square(451, 129,94);
  square(337, 35,94);

 
}
