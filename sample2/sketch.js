let bgColor = 220;

function setup() {
  createCanvas(400, 400);
  background(bgColor);
}

function draw() {
}

function keyPressed() {
  if (key === 'R') {
    bgColor = color(255, 0, 0);
  } else if (key === 'G') {
    bgColor = color(0, 255, 0);
  } else if (key === 'B') {
    bgColor = color(0, 0, 255);
  } else if (key === ' ') {
    bgColor = 220;
  }
  background(bgColor);
}