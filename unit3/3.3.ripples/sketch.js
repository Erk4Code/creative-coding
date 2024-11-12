let ripplers = [];

class Rippler{
  constructor(x,y){
    this.x = x,
    this.y = y,
    this.rings =[]; //Store each of the rings diameter and opacity
  }
  addRing(){ //adding new ring to the ripple
    this.rings.push({diameter: 0, opacity: 255}); //stores as a key and value structure in a list
  }

  drawRings(){ // draw and update the rings
    for(let i = 0; i< this.rings.length; i++){
      let ring = this.rings[i];

      stroke(`rgba(255, 255, 255, ${ring.opacity / 255})`);
      strokeWeight(2);
      noFill();
      circle(this.x, this.y, ring.diameter);

      ring.diameter +=2;
      ring.opacity -=2;

    }

    this.rings = this.rings.filter(ring=> ring.opacity > 0); // get rid of rings that have their opacity to zero

  }
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#FFC0CB");

  // Draw each of the ripple's rings
  for(let rippler of ripplers){
    rippler.drawRings();

  }

}

function mousePressed(){
  let newRipple = new Rippler(mouseX, mouseY);
  ripplers.push(newRipple);
  //adding the amount of circles in the ripple
  //timeout is used to delay and make it so the ripples space out
  for(let i = 0; i< 8; i++){
    setTimeout(()=> newRipple.addRing(), i *100);
  }

}