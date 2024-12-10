/*

This is a template that presents working code to generate
a book using a Tracery grammar. You are welcome to use this 
to make your own book!

What I have done:
 - code the workflow
 - create a basic grammar
 - customize the Bindery options to make it look better
 
What you need to do:
 - the grammar so it's actually interesting
 - the #sentence# symbol has the most effect on the output
 - #bookTitle# and #chapterTitle# do their own thing but
   use the same format. You should change those to be more
   interesting, too.
   
zw
   
*/

// this is the main grammar. the first several symbols should
// be relatively self-explanatory. The "loop" items near the 
// end uses pseudo-recursion to generate lots of content.

//created a book to be about a love story or try to be one
let grammar = tracery.createGrammar({
    bookTitle : "#nouns.capitalize# and #nouns.capitalize#",
    chapterTitle : ["And So They #verb.s.capitalize# #nouns.capitalize#"],
    sentence : "For a long time #names# #verb.s# with #names#. However, #names# does not have #nouns# for them",
    nouns:["Affection",
        "Devotion",
        "Passion",
        "Desire",
        "Adoration",
        "Heart",
        "Bond"
                    ],
    names : ["Yuki",
            "Takumi",
            "Yui",
            "Sasha",
            "Ren",
            "Rin",
            "Mio"
        ],
    adj: ["passionate", 
          "tender", 
          "heartfelt", 
          "poignant", 
          "intense",
          "bittersweet",
          "dramatic"],
    verb: ["long",
        "promise",
        "cherish",
        "embrace",
        "desire",
        "shatter",
        "pleads",
        "struggle",
        "reveal"
    ],
    verb2:["tries",
        "goes",
        "sees",
        "gazes",
        "smiles",
        "whsipers",
        "fights",
        "dreams",
    ],

    origin: "#chapterTitle#",
    paragraph : "#addSentences#", 
    addSentences : ["#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#", "#sentence#"],
    sentenceLoop : "#addSentences#",
  });
  
  // add some modifiers to help Tracery
  grammar.addModifiers(tracery.baseEngModifiers);
  
  function setup() {
    noCanvas();
    
    // create the HTML #content container
    let content = createElement("div");
    content.attribute("id","content");
    
    // add the book title
    content.child(createElement("h1",grammar.flatten("#bookTitle#")))
    
    // chapter loop
    let c = 1;
    do {
      
      // pick a chapter title
      content.child(createElement("h2",  "Chapter " + c + ": " + grammar.flatten("#chapterTitle#")));
      
      // paragraph loop
      let p = 0;
      do {
        content.child(createElement("p",grammar.flatten("#paragraph#")));
        p++;
      }while (p < random(40,130));
      c++;
    }while (c < 55);
   
    // trigger the polyfill rendering
    window.PagedPolyfill.preview();
   
  }