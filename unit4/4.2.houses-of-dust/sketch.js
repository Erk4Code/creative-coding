let quatrain = '';
// my idea to replace a house of dust is to describe possible alien races that could exist in outer space.
let grammar = tracery.createGrammar({
  "material":[ // alien species type
    "aquatic",
    "robotic",
    "hive",
    "intellegent",
    "war driven",
    "democratic",
    "advanced",
    "fourth dimentional"
  ],
  "place":[ // living near what kind of star or event
    "Living near a black hole",
    "Caught in a super nova",
    "Has multiple moons",
    "Developed a dyson sphere",
    "Conqured five galaxies",
    "Is in a transcendant plane",
    "Located near a white dwarf",
    "Edge of the universe",
    "Peacefuly inside a nebula",
    "Travels with starships",
    "Traveled from another timeline",
    "Have not developed technology",
    "Eats other worlds",
  ],
  "light_source":[ // the age of the civ
    "ancient",
    "modern",
    "aeon",
    "old",
    "young",
    "new",
    "forgotten",
  ],
  "inhabitants":[ // how they faired in the end
    "had a civil war and are now lost and scattered",
    "had their entire race merged and became one divine entity",
    "put their consciousness into a rouge Ai",
    "got sent to another parallel universe after a accident",
    "went into galactic bankruptcy",
    "stuck in a time loop",
    "used up all their natural resources",
    "ended up chillin",
    "died out to an unknown disease",
    "gene pool ran out",
    "became too self aware",
    "broke the light barrier and disappeared"
  ],
  "origin": "A civilization that is #material#\n#place#\nIs a fairly #light_source# race\nThey #inhabitants"
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
  textSize(40);

  let y = 100;
  for(let i=0; i< num.length; i++){
    text(num[i], 50,y);
    y = y+300;
  }
}