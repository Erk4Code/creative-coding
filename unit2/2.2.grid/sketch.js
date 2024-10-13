function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  // disable animation
  frameRate(10); 
  //noLoop(); //removed no Loop so I can add the frameRate animation has a cool effect on the piece.
  
}

function draw() {
  background(220);
  translate(70, 70);
  noStroke(); //added this to get rid of boarders around the square shapes
 //nested for loops to print out the col and rows have them be filled
  for(let x = 0; x < 10; x++){
    
    for(let y = 0; y < 10; y++){
      //every new square shape
      push();
      let a = random(10, 99); // this variable stores the random number for the square sizes
      let b = random(127,190); // this variable stores the randim number for the square colors in greyscale

      translate(x * 110, y * 110); //space every square evenly
      fill(b);// color of the square
      square(0,0,a); //square size determined by random variable
      pop();
      
    }
  }
}