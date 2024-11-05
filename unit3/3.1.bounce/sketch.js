let x = 340;
let y = 150;
let xspeed = 4;
let yspeed = 4;
let r = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x,y,r*2,r*2);
  x = x + xspeed; //iterate x
  y = y + yspeed; //irerate y 
  if(x > width -r || x<r){
    xspeed = -xspeed;
  }
  if(y > height -r || y <r){
    yspeed = -yspeed;
  }
  
}