var x = 50;                 //Set the x variable to start at 50
var y = 50;                 //Set the y variable to start at 50

function setup() {
	createCanvas(600, 600);   //Create the canvas
	fill(0, 0, 255);          //Set the fill to blue
}

function draw() {           //The draw loop will run as long as the page is open in your browser
	background(255);          //Start by clearing the screen (this hides any previously drawn shapes)
	rect(x, y, 100, 100);     //Draw a square in the current location x, y
	x = x + 1;                //Increase x by 2
	y = y + 1;                //Increase y by 1
}