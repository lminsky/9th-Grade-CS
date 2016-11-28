//The variables for the paddle
var paddleX = 10;   //The paddle's x position
var paddleY;        //The paddle's y position (set in setup)
var paddleW = 20;   //The paddle's width
var paddleH = 100;  //The paddle's height

//The variables for the puck
var puckX;          //The puck's x position (set in setup)
var puckY;          //The puck's y position (set in setup)
var puckR = 50;     //The puck's radius

function setup() {
  createCanvas(1000, 600);          //Create the canvas
  
  paddleY = height/2 - paddleH/2;   //Set the paddle's y position to half the canvas height minus half the paddle height
  puckX = width/2;                  //Set the puck's x position to half the canvas width
  puckY = height/2;                 //Set the puck's y position to half the canvas height

  fill(255);                        //Change the fill color to white
}

function draw() {
  background(0);                                  //Make the background black
  
  rect(paddleX, paddleY, paddleW, paddleH);       //Draw the paddle
  ellipse(puckX, puckY, puckR * 2, puckR * 2);    //Draw the puck

  //Move the paddle
  if(keyIsPressed == true) {                      //If any key is pressed...
    if (keyCode == UP_ARROW) {                      //If the up arrow is pressed...
      paddleY = paddleY - 5;                          //Move the paddle up
    }
    if(keyCode == DOWN_ARROW) {                     //If the down arrow is pressed...
      paddleY = paddleY + 5;                          //Move the paddle down
    }
  }
}