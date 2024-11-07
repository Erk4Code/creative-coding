let debug = true;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 5;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalSize = 30;
let img;
//add a sprite
function preload(){
  img = loadImage("cannon.png");
  img2 = loadImage("Map.png");
}

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
  goalx = random(width);
  goaly = random(height);

}

function draw() {
  background(220);
  image(img2, 0,0, 800, 800);
  image(img, x-50,y-30, 90 ,60);
  // distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  // add movement
  x += speedx;
  y += speedy;

  //draw circle
  //circle(x,y,50);

  //draw goal
  rect(goalx, goaly, goalSize,goalSize);

  if(mouseX > x){
    // move to the right
    speedx = speedfactor;
  }else{
    // move to the left 
    speedx = -speedfactor;

  }
  if(mouseY > y){
    // move to the right
    speedy = speedfactor;
  }else{
    // move to the left 
    speedy = -speedfactor;

  }

  // check for a collision with follower
  if(d < 25){
    score -=1;
    x = random(width);
    y = random(height);
  }

  // check for a collision for goal
  if(mouseX > goalx & mouseX < goalx + goalSize & mouseY > goaly & mouseY < goaly+goalSize){
    score +=1;
    x = random(width);
    y = random(height);

    goalx = random(width);
    goaly = random(height);
  }
  textSize(30);
  text("score: "+ score, 50, 210);
  if(debug){
    
    text("mouseX: "+ mouseX, 50,50);
    text("mouseY: "+ mouseY, 50,70);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 140);
    text("d: "+ d, 50, 160);
  }
  

}