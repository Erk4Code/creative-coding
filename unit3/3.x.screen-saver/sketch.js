// for my screen-saver I will be referencing this video https://www.youtube.com/watch?v=1-QXuR-XX_s

// it creates a flow field and I believe is a good way to get rid of burnout

// I tried imeplementing a sound visualizer but loadSound was bugging so I went with this idea

var points = []
var mult = 0.003 // higher value = more recurssion you see lower the value for more unique results

var r1
var r2
var g1
var g2
var b1
var b2


function preload(){
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  noiseDetail(1); // adjustment to noise  https://p5js.org/reference/p5/noiseDetail/

  var density = 60 // number of points in each row. Changed up the density
  var space = width / density // space between each point
  for(var x = 0; x < width; x += space){
    for(var y = 0; y < height; y+= space){
      var p = createVector(x + random(-10,10), y + random(-10,10)) // added random points to x and y so there is no a grid like pattern when first being formed makes it look more natural
      points.push(p) //add each vector inside the points array
      
    }
  }
  
  shuffle(points, true)
  // adding randomess to color
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)

  mult = random(0.002, 0.01)

}


function draw() {
  noStroke()

  if(frameCount * 2 <= points.length){ // controls the generation of the lines being drawn
    var max = frameCount * 2

  }else{
    var max = points.length
  }

  for(var i = 0; i < max; i++){

    //mapping coordinates of points to the rgb values
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 400, 400, 0) // alpha variable to create a further blend with background

    fill(r,g,b, alpha)
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720) // angle in how every point will move utalizes noise so the points will move naturally. 

    points[i].add(createVector(cos(angle), sin(angle))) //adding a vector to each point

    if(dist(width / 2, height / 2, points[i].x, points[i].y) < 400){
      ellipse(points[i].x, points[i].y, 1) //creating a circle at the x and y corrdinate of every point. third parameter is to change the size of circle
    }
    
    
  }
}

