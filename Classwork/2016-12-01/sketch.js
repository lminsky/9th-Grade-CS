var pattiWidth = 100;                   //The width of the paddle
var pattiHeight = 20;                   //The height of the paddle

var bobX = 300;                         //The ball x position
var bobY = 300;                         //The ball y position
var bobR = 25;                          //The ball radius
var bobXSpeed = 2;                      //The ball x speed
var bobYSpeed = 3;                      //The ball y speed

var score = 0;                          //The player's score

function setup() {
  createCanvas(600, 600);               //Create the canvas
}

function draw() {
  background(210, 173, 255);            //Set the background color
  rect(mouseX, height-50, pattiWidth, pattiHeight);   //Draw the paddle using the variables from above
  ellipse(bobX, bobY, bobR*2, bobR*2);  //Draw the ball using the variables from above

  bobX = bobX + bobXSpeed;              //Change the ball's x position by its x speed
  bobY = bobY + bobYSpeed;              //Change the ball's y position by its y speed

  if(bobX > width - bobR) {             //If the ball is beyond the right wall...
    bobXSpeed = bobXSpeed * -1;           //Negate the ball's x speed
  }

  if(bobX < bobR) {                     //If the ball is beyond the left wall...
    bobXSpeed = bobXSpeed * -1;           //Negate the ball's x speed
  }

  if(bobY > height + bobR) {            //If the ball is beyond the bottom wall...
    bobX = width/2;                       //Change the ball's x value to the center of the canvas
    bobY = height/2;                      //Change the ball's y value to the center of the canvas
    score = 0;                            //Reset the user's score to zero
    console.log("Oops");                   //Log the user's score to the console
  }

  if(bobY < bobR) {                     //If the ball is beyond the top wall...
    bobYSpeed = bobYSpeed * -1;           //Negate the ball's y speed
  }

  if(bobX > mouseX) {                   //If the ball is to the right of the paddle's left side...
    if(bobX < mouseX + pattiWidth) {      //If the ball is to the left of the paddle's right side...
      if(bobY + bobR > height-50) {         //If the ball is below the top of the paddle...
        score = score + 1;                    //Increase the user's score
        console.log("Score: " + score);       //Log the user's score to the console
        bobYSpeed = -1 * Math.abs(bobYSpeed); //Set the ball's y speed to negative (so that it moves up)
      }
    }
  }
}