let quatrain = '';
// my idea for house of dust is 
let grammar = tracery.createGrammar({
  "material":[
    "sand",
    "plastic",
    "leaves",
    "warframe",
    "glass",
    "wood",
    "roots",
    "mud",
    "dust",
    "broken dishes",
    "brick",
    "stone",
    "weeds",
    "straw"
  ],
  "place":[
    "By a river",
    "Inside a mountain",
    "Among small hills",
    "In a deserted airport",
    "On the sea",
    "In a metropolis",
    "In a cold, windy climate",
    "In dense woods",
    "On open ground",
    "In a green, mossy terrain",
    "In a deserted factory",
    "In a overpopulated area",
    "On a island",
    "In southern France",
    "By an abandoned lake",
    "In a desert",
    "In Japan",
    "In a hot climate"
  ],
  "light_source":[
    "natural light",
    "all available lighting",
    "electricity",
    "candles",
    "lamps",
  ],
  "inhabitants":[
    "French and German speaking people",
    "people who eat a great deal",
    "people who love to read",
    "children and old people",
    "little boys",
    "horses and birds",
    "people from many walks of life",
    "various birds and fish",
    "friends",
    "vegetarians",
    "fishermen and families",
    "people who sleep almost all the time",
    "lovers",
    "collectors of all types",
  ],
  "origin": "A house of #material#\n#place#\nUsing #light_source#\nInhabited by #inhabitants"
})
quatrain = grammar.flatten("#origin#");

let num = [];// store the quatrain

function setup() {
  createCanvas(800, 1600);
  noLoop();
  let x = 5; //number of quatrain
  for(let i = 0; i < x; i++){
    num.push(grammar.flatten("#origin#"));
  }
}


function draw() {
  background(220);
  textSize(50);

  let y = 100;
  for(let i=0; i< num.length; i++){
    text(num[i], 50,y);
    y = y+300;
  }
}