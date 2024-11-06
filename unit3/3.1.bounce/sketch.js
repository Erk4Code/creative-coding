let x = 340;
let y = 150;
let xspeed = 4;
let yspeed = 4;
let r = 20;
let color;

function setup() {
  createCanvas(400, 400);
  color = [random(255), random(255), random(255)];
}

function draw() {
  background(220);
  fill(color);
  ellipse(x,y,r*2,r*2);
  x = x + xspeed; //iterate x
  y = y + yspeed; //irerate y 
  if(x > width -r || x<r){
    xspeed = -xspeed;
    color = [random(255), random(255), random(255)]; // Change color on x collision
  }
  if(y > height -r || y <r){
    yspeed = -yspeed;
    color = [random(255), random(255), random(255)]; // Change color on y collision
  }
  
}