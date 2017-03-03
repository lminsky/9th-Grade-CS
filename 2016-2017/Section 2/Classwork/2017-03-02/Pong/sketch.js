/*To Do:
  - Speed up the ball
  - Add something in the way
  - Add sounds
  - Change the color of the ball when it hits the paddle
  - Add title
  - Change the angle of the ball's velocity depending on where it hits the paddle
  - Display game over text
  - Import an image
  - Use keyboard controls
*/

var x;                        //The ball's x position
var y;                        //The ball's y position
var diameter = 100;           //The ball's diameter
var xSpeed = 5;               //The ball's xSpeed
var ySpeed = 7;               //The ball's ySpeed
var paddle_width = 300;       //The paddle's width
var paddle_height = 50;       //The paddle's height
var paddle_x;                 //The paddle's x position
var paddle_y;                 //The paddle's y position
var score = 0                 //The player's score


function setup() {
  createCanvas(windowWidth, windowHeight);  //Create the canvas (same size as the window)
  x = random(diameter, width-diameter);     //Set the starting x position of the ball                        
  y = height/4;                             //Set the starting y position of the ball
  paddle_y = height-100;                    //Set the paddle's y position
}

function draw() {
  background(255, 0, 255);                  //Set the background color (magenta)
  
  textSize(32);
  text(score, 20, 50);

  paddle_x = mouseX - paddle_width/2;       //Place the x position of the paddle so that the mouse is in the center
  ellipse(x, y, diameter, diameter);        //Draw the ball
  rect(paddle_x, paddle_y, paddle_width, paddle_height)   //Draw the paddle
  x = x + xSpeed;                           //Move the ball on the x axis
  y = y + ySpeed;                           //Move the ball on the y axis

  // This code makes the ball bounce off the paddle
  if(y >= paddle_y - diameter/2) {          //First check if the ball is at or below the top of the paddle
    if(x > paddle_x) {                      //Then check if the ball is to the right of the left side of the paddle
      if(x < paddle_x + paddle_width) {     //Then check if the ball is to the left of the right side of the paddle
        if(y < paddle_y + ySpeed + 1 - diameter/2) {    //The make sure the ball isn't below the paddle
          ySpeed = ySpeed * -1;             //If all of the above things are true, negate the ball's y speed
          score = score + 1;
          console.log(score);
          //mySound.play();
        }
      }
    }
  }

  //Check to see if the ball is at or above the top of the screen
  //If it is, negate the y speed
  if(y <= diameter/2) {
    ySpeed = ySpeed * -1;
  }

  //Check to see if the ball is at or beyond the right side of the screen
  //If it is, negate the x speed
  if(x > width - diameter/2) {
    xSpeed = xSpeed * -1;
  }

  //Check to see if the ball is at or beyond the left side of the screen
  //If it is, negate the x speed
  if(x <= diameter/2) {
    xSpeed = xSpeed * -1;
  }

  if(y > height + 200) {
    score = 0;
    y = height/4;
  }
}