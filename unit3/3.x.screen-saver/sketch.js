// for my screen-saver I will be referencing this video https://www.youtube.com/watch?v=1-QXuR-XX_s

// it creates a flow field and I believe is a good way to get rid of burnout

// I tried imeplementing a sound visualizer but loadSound was bugging so I went with this idea

var points = []
var mult = 0.003 // higher value = more recurssion you see lower the value for more unique results


function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  noiseDetail(1); // adjustment to noise  https://p5js.org/reference/p5/noiseDetail/

  var density = 40 // number of points in each row. Changed up the density
  var space = width / density // space between each point
  for(var x = 0; x < width; x += space){
    for(var y = 0; y < height; y+= space){
      var p = createVector(x + random(-10,10), y + random(-10,10)) // added random points to x and y so there is no a grid like pattern when first being formed makes it look more natural
      points.push(p) //add each vector inside the points array
      
    }
  }
}

function draw() {
  noStroke()
  fill(255)
  for(var i = 0; i < points.length; i++){
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720) // angle in how every point will move utalizes noise so the points will move naturally. 

    points[i].add(createVector(cos(angle), sin(angle))) //adding a vector to each point

    ellipse(points[i].x, points[i].y, 1) //creating a circle at the x and y corrdinate of every point. third parameter is to change the size of circle
  }
}

