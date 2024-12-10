// new project idea I went with making things simple and decided to do a sort of rhythm game.
// I hope the audio will work as it is my own music that I created

let w = 0;
let h = 0;

class Tile{ // title constructor to generate tiles on the scroller
  constructor(lane){ // lane parameter lanes are from 0 ,1 ,2 ,3 so in total 4 lanes
    this.lane = lane;
    this.w = w/4;
    this.h = h/5;
    this.x = this.lane*w/4;
    this.y = 0;
  }
  show(){ // show to generate tile
    push();
      translate(this.x, this.y);
      rectMode(CENTER); //set mode to center
      rect(this.w/2, this.h/2,this.w,this.h);
    pop();
  }

}


tiles = []; // store tiles
function setup(){
  createCanvas(windowWidth,windowHeight);
  w = width;
  h = height;
  tiles.push(new Tile(1))
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

  tiles[0].show();
}