function setup() {
	createCanvas(800, 800);								//Create the canvas
	stroke(120);													//Set the stroke to grey
	fill(120);														//Set the fill to grey

	line(799, 0, 799, 800);								//Draw the right-most line
	line(0, 799, 800, 799);								//Draw the bottom-most line

	for(var x = 0; x < 800; x += 100)			//Loop through the verticle line x positions
		line(x, 0, x, 800);									//Draw each verticle line

	for(var y = 0; y < 800; y += 100)			//Loop through the horizontal line y positions
	line(0, y, 800, y);										//Draw each horizontal line

	strokeWeight(0);											//Set the stroke weight to 0 (text looks better without stroke)

	for(var x = 100; x <= 800; x += 100)	//Loop through each x text location
		text(x, x-25, 15);									//Write the x-coordinate

	for(var y = 100; y <= 800; y += 100)	//Loop through each y text location
		text(y, 5, y-5);										//Write the y-coordinate
}
