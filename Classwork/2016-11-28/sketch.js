var phyllis = 255;                  //This variable will be used as the fill

function setup() {
  createCanvas(700, 700);           //Create the canvas
  cursor(HAND);                     //Set the curson to look like a hand
}

function draw() {
  fill(phyllis);                    //Set the fill to the value in phyllis

  background(255, 0, 0);            //Set the background to red

  ellipse(width/2, height/2, width, height);    //Draw a circle in the center of the canvas that fills the canvas

  rect(mouseX, mouseY, 50, 50);     //Draw a rectangle at the mouse location
}


function mouseClicked() {           //If the mouse is pressed...
  if(mouseY > height/2) {             //If the mouse is in the top half of the canvas...
    phyllis = phyllis - 5;              //Decrease the value of phyllis
  }

  if(mouseY < height/2) {             //If the mouse if in the bottom half of the canvas...
    phyllis = phyllis + 5;              //Increase the value of phyllis
  }
}

function keyPressed() {             //If the key is pressed...
  if(key == 'P') {                    //If the key is P...
    console.log("Pressed");             //Print the word Pressed to the console
  }
  if(keyCode == UP_ARROW) {           //If the key is the up arrow...
    console.log("UP");                  //Print the word Up to the console
  }
}