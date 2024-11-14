let quatrain = '';

let grammar = tracery.createGrammar({
  "material":[
    "SAND",
    "PLASTIC",
    "LEAVES",
    "WARFRAME"
  ],
  "origin": "A HOUSE OF #material#"
})
quatrain = grammar.flatten("#origin#");


function setup() {
  createCanvas(800, 800);
  noLoops();
}


function draw() {
  background(220);
  textSize(40);
  text(quatrain, 50,50); 
}