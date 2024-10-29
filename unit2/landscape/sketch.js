let yoff = 0.0; // y global variable to create the difference in layers for mountains
let r; //random rgb colors for sky global variable
let g;
let b;

let black, colorMain;
function setup() {
  createCanvas(1000, 800);
  noLoop(); // Only draw once for a static mountain
  r = random(100,200);
  g = random(100,200);
  b = random(100,200);
  //put inside the setup function so it does not randomize the colors everytime but on refresh

  black = color(0);
  colorMain = color(r,g,b);

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