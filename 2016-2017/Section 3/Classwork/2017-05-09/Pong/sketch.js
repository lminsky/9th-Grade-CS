var paddleX;    //The Paddle's X position
var paddleY;    //The Paddle's Y position
var paddleH;    //The Paddle's Height
var paddleW;    //The Paddle's X Width

var ballX;      //The Ball's X position
var ballY;      //The Ball's Y position
var ballD;      //The Ball's Diameter
var speedX;     //The Ball's speed on the X axis
var speedY;     //The Ball's speed on the y axis

var fillColor;  //The fill color of the ball

function setup() {
  createCanvas(windowWidth, windowHeight);    //Create the canvas to be the same width and height of the window
  paddleH = 150;    //Set the paddle height
  paddleW = 20;     //Set the paddle width
  paddleX = 10;     //Set the paddle x position

  ballD = 100;      //Set the ball diameter
  ballX = random(ballD, width-ballD);   //Set the starting x position of the ball
  ballY = random(ballD, height-ballD);  //Set the starting y positino of the ball

  speedX = -2;      //Set the ball speed on the x axis
  speedY = 1;       //Set the ball speed on the y axis

  frameRate(10);    //Slow the framerate down to 10 so we can see what's happening
}

function draw() {
  background(255, 255, 255);      //Reset the background to white

  if(mouseY < paddleH/2) {                  //If the mouse is towards the top of the screen...
    y = 0;                                  //Set the position of the paddle to 0
  } else if(mouseY > height - paddleH/2) {  //If the mouse is towards the bottom of the screen...
    paddleY = height - paddleH;             //Set the position of the paddle to height of the canvas minus height of the paddle
  } else {                                  //Otherwise...
    paddleY = mouseY - paddleH/2;           //Set the position of the paddle to the mouse Y position minus half of the paddle height
  }

  ballX = ballX + speedX;           //Change the ball's position on the x axis
  ballY = ballY + speedY;           //Change the ball's position on the y axis
  if(ballX > width - ballD/2) {     //If the ball is at the right side of the screen...
    speedX = -1 * abs(speedX)       //Make it move left
  } 
  if(ballX < ballD/2) {             //If the ball is at the left side of the screen...
    speedX = abs(speedX)            //Make it move right
  }
  if(ballY > height - ballD/2) {    //If the ball is at the bottom of the screen
    speedY = -1 * abs(speedY)       //Make it move up
  }
  if(ballY < ballD/2) {             //If the ball is at the top of the screen
    speedY = abs(speedY)            //Make it move down
  }

  fillColor = 0;                    //Set the variable fillColor to 0

  fill(fillColor, 0, 0);            //Set the fill to either black or red (depending on the conditional above)
  noStroke();                       //Remove the stroke from the shapes
  rect(paddleX, paddleY, paddleW, paddleH);   //Draw the paddle
  ellipse(ballX, ballY, ballD, ballD);        //Draw the ellipse
  
  //Draw the green lines for the ball
  stroke(0, 255, 0);    
  line(ballX - ballD/2, 0, ballX - ballD/2, height);
  line(0, ballY, width, ballY);

  //Draw the red lines for the paddle
  stroke(255, 0, 0);
  line(0, paddleY, width, paddleY);
  line(0, paddleY + paddleH, width, paddleY + paddleH);
  line(paddleX + paddleW, 0, paddleX + paddleW, height);
}