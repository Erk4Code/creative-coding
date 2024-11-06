let x = 340;
let y = 150;
let xspeed = 4; //speed of circle traveling
let yspeed = 6; //6 to vary in the travel
let r = 20; // radius of the circle
let color; // change color of circle when bouncing

function setup() {
  createCanvas(400, 400);
  color = [random(255), random(255), random(255)]; // random color list
}

function draw() {
  background(220);
  fill(color);
  ellipse(x,y,r*2,r*2); // drawing the circle
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