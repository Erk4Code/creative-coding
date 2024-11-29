// for my screen-saver I will be referencing this video https://www.youtube.com/watch?v=1-QXuR-XX_s

// it creates a flow field and I believe is a good way to get rid of burnout

// I tried imeplementing a sound visualizer but loadSound was bugging so I went with this idea

class Flow{
  constructor(){
    this.points = [];
    this.mult = random(0.002, 0.005); // higher value = more recurssion you see lower the value for more unique results
    this.colors = {
      r1: random(255),
      r2: random(255),
      g1: random(255),
      g2: random(255),
      b1: random(255),
      b2: random(255)
    };
    this.initFlow();
  }
  initFlow(){ // intializes all the vectors
    var density = 60 // number of points in each row. Changed up the density
    var space = width / density // space between each point
    for(var x = 0; x < width; x += space){
      for(var y = 0; y < height; y+= space){
        var p = createVector(x + random(-10,10), y + random(-10,10)) // added random points to x and y so there is no a grid like pattern when first being formed makes it look more natural
        this.points.push(p) //add each vector inside the points array
        
      }
    }
    
    shuffle(this.points, true)

  }
  createFlow(){ // draws out the flow canvas
    noStroke()

    if(frameCount * 8 <= this.points.length){ // controls the generation of the lines being drawn change multi of frameCount to control speed
      var max = frameCount * 8

    }else{
      var max = this.points.length
    }

    for(var i = 0; i < max; i++){

      //mapping coordinates of points to the rgb values
      var r = map(this.points[i].x, 0, width, this.colors.r1, this.colors.r2)
      var g = map(this.points[i].y, 0, height, this.colors.g1, this.colors.g2)
      var b = map(this.points[i].x, 0, width, this.colors.b1, this.colors.b2)
      var alpha = map(dist(width / 2, height / 2, this.points[i].x, this.points[i].y), 0, 400, 400, 0) // alpha variable to create a further blend with background

      fill(r,g,b, alpha)
    
      var angle = map(noise(this.points[i].x * this.mult, this.points[i].y * this.mult), 0, 1, 0, 720) // angle in how every point will move utalizes noise so the points will move naturally. 

      this.points[i].add(createVector(cos(angle), sin(angle))) //adding a vector to each point

      if(dist(width / 2, height / 2, this.points[i].x, this.points[i].y) < 400){
        ellipse(this.points[i].x, this.points[i].y, 1) //creating a circle at the x and y corrdinate of every point. third parameter is to change the size of circle
      }
    
    
    }
  }

}

let flow;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  noiseDetail(1); // adjustment to noise  https://p5js.org/reference/p5/noiseDetail/

  flow = new Flow();

}


function draw() {
  flow.createFlow();
}

