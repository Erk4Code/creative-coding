function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

//This is my attempt at creating a discord skull emoji
//I used mainly circles and rectangles with corners given a radius as the skill head itself is not actually a full circle. The skull has no corners so it needs radius.

function draw() {
  background(0);
    rectMode(CENTER);
  noStroke();
  let c1 = color(240);
  fill(c1);
  circle(200,150,200); // skull head shape
  rect(200,178,200,150,45); //skull head shape
  rect(145,266, 45, 78, 45); //teeth
  rect(200,266, 45, 78, 45); //teeth
  rect(255,266, 45, 78, 45); //teeth
  
  let c2 = color(0);
  fill(c2);
  circle(155,140,65); //eyes
  circle(245,140,65); //eyes
  
  circle(200,200,20); // nose features
  circle(190,205,20);
  circle(210,205,20);
  
  
}