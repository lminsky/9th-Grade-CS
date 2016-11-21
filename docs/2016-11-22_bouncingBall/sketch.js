var x = 300;                //Set the x variable to start at 300
var y = 300;                //Set the y variable to start at 300
var xSpeed = 5;             //Set the x speed to 5
var ySpeed = 8;                 //Set the y speed to 8  
var d = 100;                //Set the diameter to 100

function setup() {
	createCanvas(600, 600);   //Create the canvas
	fill(200, 0, 0);          //Set the fill to red
}

function draw() {           //The draw loop will run as long as the page is open in your browser
	background(255);          //Start by clearing the screen (this hides any previously drawn shapes)
	
  ellipse(x, y, d, d);      //Draw a circle in the current location x, y
	x = x + xSpeed;           //Increase x by xSpeed
	y = y + ySpeed;           //Increase y by ySpeed

  if(x > width - d / 2) {   //If x is greater than the width of the box
    xSpeed = xSpeed * -1;   //Multiply x by -1
  }
  if(x < d / 2) {           //If x is less than the radius of the circle
    xSpeed = xSpeed * -1;   //Multiply x by -1
  }
  if(y > height - d / 2) {  //If y is greater than the height of the box
    ySpeed = ySpeed * -1;   //Multiply y by -1
  }
  if(y < d / 2) {           //If y is less than the radius of the circle
    ySpeed = ySpeed * -1;   //Multiply y by -1
  }
}