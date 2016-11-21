function setup() {
	createCanvas(800, 800);		//Create the grid
	strokeWeight(3);					//Set the stroke weight to 3

	var x = 50;								//Set the variable "x" to 50
	var y = 350;							//Set the variable "y" to 350
	var w = 100;							//Set the variable "w" to 100

	rect(x, y, w, w);					//Draw a rectangle at x, y with a width and height of w
	x = x + 200;							//Increase x by 200
	rect(x, y, w, w);					//Draw a rectangle at x, y with a width and height of w
	x = x + 200;							//Increase x by 200
	rect(x, y, w, w);					//Draw a rectangle at x, y with a width and height of w
	x = x + 200;							//Increase x by 200
	rect(x, y, w, w);					//Draw a rectangle at x, y with a width and height of w
	x = x + 200;							//Increase x by 200
}