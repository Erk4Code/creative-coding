// new project idea I went with making things simple and decided to do a sort of rhythm game.
// I hope the audio will work as it is my own music that I created
// note audio does not work
// Refernced this video for code https://www.youtube.com/watch?v=1Izg1eHFsUw

//going to try and implement keys instead of mouse press

let w = 0;
let h = 0;

let s = 'play';
let score = 0;
let gameOver = false;
let song;

class Tile{ // title constructor to generate tiles on the scroller
  constructor(lane){ // lane parameter lanes are from 0 ,1 ,2 ,3 so in total 4 lanes
    this.lane = lane;
    this.w = w/4 - 20;
    this.h = h/5;
    this.x = 10 + this.lane*w/4;
    this.y = -2*this.h;
    this.speed = 10; // going to change speed to change with time
  }
  show(){ // show to generate tile
    push();

      translate(this.x, this.y);
      rectMode(CENTER); //set mode to center
      noStroke();
      fill("cyan");
      rect(this.w/2, this.h/2,this.w,this.h);
    pop();
  }
  move(){ // this is what allows tiles to move
    this.y +=this.speed;
  }
  arrive(){ // returns true once tile is at its own height
    return this.y > -this.h + 5;
  }

  missed(){ // first tile goes outside the canvas
    return this.y > 9 * this.h/2;
  }

  touched(x,y){
    return(x>this.x)&&(x<this.x + this.w) && (y > this.y) && (y<this.y +this.h);
  }

}


tiles = []; // store tiles


function setup(){
  createCanvas(800,800);
  w = width;
  h = height;
  tiles.push(new Tile(int(random(4))))
}



function draw(){

  frameRate(30); // 30 frames per second
  background(0,200);
  stroke(255);
  //draw lines to split the tiles
  line(w/4,0,w/4,h);
  line(2*w/4,0,2*w/4,h);
  line(3*w/4,0,3*w/4,h);

  //horizontal line
  line(0,4*h/5,w,4*h/5);

  if(tiles[tiles.length-1].arrive()){
    tiles.push(new Tile(int(random(4))))

  }
  if(tiles[0].missed()){
    gameOver = true;
  }

  for(var tile of tiles){
    if(!gameOver){
      tile.move();
    }
    tile.show();
  }

  textSize(28);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  text(s,w/2,32);
  text(score,w/2,64);
  if(gameOver){
    background(0);
    text('Game Over', w/2, h/2);
    text('Score: ' +score, w/2, h/2+50);
  }
}

function mousePressed(){//mouse pressed
  if(tiles[0].touched(mouseX,mouseY)){
    score+=2;
    tiles.splice(0,1);
  }else{
    gameOver = true;
  }

}