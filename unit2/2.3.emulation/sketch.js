function setup() {
  //for my project I decided to create the exact replica of https://spalterdigital.com/artworks/walk-through-raster-series-7-3-3-1/
  //for this I will try to implement functions to draw the different black and red squares and then add position parameters to draw them accordingly on the canvas.


  // create the canvas
  createCanvas(800, 900);

  // disable animation
  noLoop();
}
//function to draw black box
function drawBlackBox(x, y){
  noFill(); //This is to make the inside squares transparent
  strokeWeight(2); //make original boards to be a little more filling
  stroke(0); // change boarder color to be black
  square(x, y, 60); // original square size
  rect(x-2,y,62,60); // fill boarder for the left side
  rect(x+2,y,58,60); 

  rect(x,y,62,60); // fill boarder for the right side
  rect(x,y,58,60);

}

// red color 166 61 53
function draw() {
  background(247,243,240);
  drawBlackBox(160, 145);

}
