function setup() {
	createCanvas(500, 500);			  //Create a canvas that is 500 wide by 500 tall

								                //Colors are set as (red, green, blue)
	background(0, 200, 0);			  //Set the background to a light green

	fill(255, 0, 0);				      //Set the fill to red
	stroke(218, 239, 26);			    //Set the stroke to yellowish
	strokeWeight(5);				      //Make the stroke bigger

	ellipse(150, 100, 100, 100);	//Draw an ellipse
	ellipse(100, 100, 100, 100);	//Draw an ellipse on top of the first

	rect(200, 300, 100, 20);		  //Draw a rectangle

	console.log("Hello");			    //Print text out to the console

}

function draw() {
  
}