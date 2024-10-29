//I decided to go with a flower idea but could not come up with anything during research instead I went with an easy mountain solution towards my project
//I wanted to create something that was minimalist design and could convey a unique theme. This is what I came up with

let yoff = 0.0; // y global variable to create the difference in layers for mountains
let r; //random rgb colors for sky global variable
let g;
let b;
let black, colorMain; // colors for gradiant and main color scheme

//global variable for stars
let stars = 200; //number of stars
let minStar = 0.5; //smallest star size
let maxStar = 2; //biggest star size
let minOpa = 50; //min transparency
let maxOpa = 200; //max transparency

function setup() {
  createCanvas(1000, 800);
  noLoop(); // Only draw once for a static mountain
  r = random(100,200);
  g = random(100,200);
  b = random(100,200);
  //put inside the setup function so it does not randomize the colors everytime but on refresh

  black = color(0);
  colorMain = color(r,g,b); // main color to mainuplate

  //adding gradiant to the sky
  for(let y = 0; y<height; y++){
    n = map(y,0,height,0,1);
    let newColor = lerpColor(black, colorMain, n);
    stroke(newColor);
    line(0,y,width,y);

  }
  
}


// used inspiration from this p5 js edit using perlin noise https://editor.p5js.org/slow_izzm/sketches/E34tTKGG4
// add reddit post to come up with the color scheme https://www.reddit.com/r/generative/comments/jfmzhl/mountains/



function draw() {
  //drawing stars in the night sky
  for(let i = 0; i < stars; i++){
    let randomSize = random(minStar, maxStar); 
    let randomX = random(width);
    let randomY = random(height);
    noStroke();
    ellipse(randomX, randomY, randomSize,randomSize);

  }
  // added in the sun but the blendMode effect created the normal mountains into something etheral looking so I kept it for the uniqueness.
  blendMode(ADD);
  dawn = color(248,131,121);
  let dawnNew = lerpColor(colorMain, dawn, 0.33);
  fill(dawnNew);
  noStroke();
  ellipse(width /1.2, height /3.5, 100);

  fill(colorMain);
  ellipse(width /5, height /3, 83);

// loop for multi layered mountain
// uses a nested for loop for one creating a layer and drawing a mountain shape in that layer
  for (let layer = 0; layer < 5; layer++) {
    let yoff = layer * 0.7; //y offset for each layer

    r = r-30; // colors get darker as the layer goes down
    g = g-30;
    b = b-30;
    let mountainColor = color(r,g,b);

    fill(mountainColor);
    noStroke();

    beginShape(); //creating a shape for the mountain
    let xoff = 0;

    // draw out the mountain
    for (let x = 0; x <= width; x += 10) {
      let y = map(noise(xoff, yoff), 0, 1, height / 2, height); //draw out the mountain using the map function
      vertex(x, y); // set cords for mountain shape
      xoff += 0.020;
    }

    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    yoff += 0.1; // increment the y for the next mountain layer
  }
}