let shapes = [];

function setup() {
  createCanvas(600, 400);
  noLoop();
  
  for (let i = 0; i < 10; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(50, 50),
      color: color(random(254), random(255), random(256))
    });
  }
}

function draw() {
  background(220);
  for (let shape of shapes) {
    fill(shape.color);
    noStroke();
    ellipse(shape.x, shape.y, shape.size);
  }
}

function mouseMoved() {
  redraw();
  for (let shape of shapes) {
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    if (d < shape.size / 2) {
      shape.color = color(random(255), random(255), random(255));
    }
  }
}
