//Modify this code to create a gradient effect
//That means the color of the lines should fade from one color to another
//Black to white will be easiest in this case

function setup() {
  createCanvas(windowWidth, windowHeight);  //Set the canvas size
  var x = 0;                                //Create a variable called x
  while(x < width) {                        //As long as x is less than width run whatever is inside the brackets
    line(x, 0, x, height);                  //Draw a line from the top of the screen to the bottom at position 'x' on the x-axis
    x = x + 1;                              //Increase x by 1
  }
}