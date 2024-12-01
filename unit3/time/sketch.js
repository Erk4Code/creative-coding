// I will represent time with a donut
// I will be using the torus function and the time along with map
// 4AM project idea

let lastSecond = -1;  // To track the last second for color change
let currentColor;     // current color for donut

function setup() {
  createCanvas(800, 800,WEBGL);
  currentColor = color(random(255), random(255), random(255));  // init the color
}

function draw() {
  background(0);

  let s = second();  
  let m = minute();  
  let h = hour();    

  let rotationspeed = map(m, 0, 59, 0.01, 0.1) // the speed of the donut changes accordingly to the current minute

  let tubeRadius = map(h, 0, 23, 10, 100);  // the radius of the donut changes accordingly to the hour ot the current time

  // Change the color every second
  if (s !== lastSecond) {
    lastSecond = s;  // update the last second
    currentColor = color(random(255), random(255), random(255));  // new color
  }
  fill(currentColor);

  rotateY(rotationspeed * frameCount);
  rotateX(rotationspeed * frameCount);

  torus(150, tubeRadius + 30); // + 30 to add more thickness to donut
  



}