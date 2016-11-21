function setup() {
	createCanvas(800, 800);			//Create the canvas
	strokeWeight(3);						//Set the stroke weight to 3

	var start = 150;						//Set the start variable to 150
	var end = 550;							//Set the end variable to 550
	var distance = 50;					//Set the distance variable to 50
	
	var x = 50;									//Set x to start at 50

	//This draws the verticle lines
	//The go from y=start (150) to y=end (550)
	//After every line, increase the value of x by "distance" (50)
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;
	line (x, start, x, end);
	x = x + distance;


	var y = 50;									//Set y to start at 50

	//This draws the horizontal lines
	//The go from x=start (150) to x=end (550)
	//After every line, increase the value of y by "distance" (50)
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
	line(start, y, end, y);
	y = y + distance;
}