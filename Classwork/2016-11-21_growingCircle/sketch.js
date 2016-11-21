var d = 1000;                   //Set the variable d (for diameter) to start at 1000

function setup() {
	createCanvas(800, 800);       //Create the canvas
	fill(253, 219, 255);          //Set the fill to a nice light pink
}

function draw() {               //The draw loop will run as long as the page is open in your browser
	background(255);              //Start by clearing the screen (this hides any previously drawn shapes)
	ellipse(400, 400, d, d);      //Draw an ellipse in the center of the canvas with a diameter "d"
	d = d - 1;                    //Decrease the value of "d" by 1
}