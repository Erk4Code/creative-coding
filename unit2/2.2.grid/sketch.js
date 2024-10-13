function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  // disable animation
  frameRate(10);
  //noLoop();
  
}

function draw() {
  background(220);
  translate(70, 70);
  noStroke();

  for(let x = 0; x < 10; x++){
    
    for(let y = 0; y < 10; y++){
      push();
      let a = random(10, 99);
      let b = random(127,190);

      translate(x * 110, y * 110);
      fill(b);
      square(0,0,a); 
      pop();
      
    }
  }
}