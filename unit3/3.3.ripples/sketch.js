let ripple_x = 0;
let ripple_y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#FFC0CB");

  push();
  fill("white");
  textSize(50);
  text("ripple_x:" + ripple_x, 50, 50);
  text("ripple_y:" + ripple_y, 50, 90);
  pop();
}

function mousePressed(){
  ripple_x = mouseX;
  ripple_y = mouseY;

}