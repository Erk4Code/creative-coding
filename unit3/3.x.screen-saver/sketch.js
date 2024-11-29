// for my screen-saver I will be referencing this video https://www.youtube.com/watch?v=1-QXuR-XX_s

// it creates a flow field and I believe is a good way to get rid of burnout

// I tried imeplementing a sound visualizer but loadSound was bugging so I went with this idea

var points = []

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  var density = 100 // number of points in each row
  var space = width / density // space between each point
  for(var x = 0; x < width; x += space){
    for(var y = 0; y < height; y+= space){
      var p = createVector(x,y)
      points.push(p) //add each vector inside the points array
  
    }
  }
}

function draw() {
  noStroke()
  fill(255)
  for(var i = 0; i < points.length; i++){
    ellipse(points[i].x, points[i].y, 1) //creating a circle at the x and y corrdinate of every point. third parameter is to change the size of circle
  }
}

