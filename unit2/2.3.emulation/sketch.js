function setup() {
  //for my project I decided to create something similar of https://spalterdigital.com/artworks/walk-through-raster-series-7-3-3-1/
  //for this I will try to implement functions to draw the different black and red squares and then add position parameters to draw them accordingly on the canvas.
  //it will use a random function to position all the squares randomly along the canvas


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

function drawRedBox(x, y){
  noFill(); //sadly you cannot get opaque on boarders only within the shape's color itself
  strokeWeight(2);
  stroke('rgb(186,54,36)'); // color of red used in the red boxes
  square(x,y, 60); //same square size
  rect(x,y-2,60,62); //flip the values based on the y positioning for top boarder
  rect(x,y+2,60,58);

  rect(x,y,60,62); // flip values for y for the bottom boarder
  rect(x,y,60,58);
}

function draw() {
  background(237,237,237); // background canvas color
  randomSeed(99); // to get a consistent seed and same canvas for every refresh

  for(let i = 0; i < 40; i++){ //40 red squares and being drawn first then overwritten by black
    let x = random(130, 650);
    let y = random(130, 800);
    drawRedBox(x,y);

  }
  for(let i = 0; i < 40; i++){ //40 black squares are being drawn
    let x = random(130, 650);
    let y = random(130, 800);
    drawBlackBox(x,y);

  }
  // Drawings and locations for all individual black boxes
  //drawBlackBox(160, 145);
  //drawBlackBox(160, 178);
  //drawBlackBox(194, 194);
  //drawBlackBox(227, 210); // first black chunk to the top left
  //drawBlackBox(261, 245);
  //drawBlackBox(261, 163);
  //drawBlackBox(294, 194);

  //drawBlackBox(140, 296); // single box left

  //drawBlackBox(140, 420);
  //drawBlackBox(123, 469);
  //drawBlackBox(123, 469);
  //decided to keep the above because it was hard work then I went with random positioning instead


}
