// for my screen-saver I will be referencing this video https://www.youtube.com/watch?v=uk96O7N1Yo0

// it is a tutorial on creating an audio visualizer I thought that since it had particles that interacted with music it would help "save the screen" from burnout

// I will try to change some implementations that are from the video so I also have my own implementations and not just copied over the code

//audio used from nocopyrightsounds
var song

function preload(){
  song = loadSound('TULE, Chris Linton - Fearless pt. II (feat. Chris Linton) [NCS Release].mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
}

function mouseClicked(){ //test to see if audio is playing
  if(song.isPlaying()){
    song.pause()
  }else{
    song.play()
  }

}