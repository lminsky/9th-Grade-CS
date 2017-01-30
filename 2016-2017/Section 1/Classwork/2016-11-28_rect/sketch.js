var pattiX;                           //Create a variable to store the paddle's X value

function setup() {
  createCanvas(600, 600);             //Create the canvas
}

function draw() {
  background(0);                      //Set the background to black
  pattiX = mouseX - 50;               //Set pattiX to the mouse's x position minus 50

  if(mouseX + 100 > 600) {            //If the mouse is beyond the right wall...
    pattiX = 500;                       //Set the paddle x position to 500
  }
  if(mouseX - 50 < 0) {               //If the mouse is beyond the left wall...
    pattiX = 0;                         //Set the paddle x position to 0
  }

  rect(pattiX, height-20, 100, 10);   //Draw the paddle
}