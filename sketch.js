let isDaytime = false;

function setup() {
  createCanvas(400, 400);

  const currentHour = hour();
  isDaytime = (currentHour >= 7 && currentHour < 19);
}

function draw() {
  background(220);

   if (isDaytime == true) {
    background('#fcf9d2ff'); 
  } else {
    background('#000022'); 
  }
}
