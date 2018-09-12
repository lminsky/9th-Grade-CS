function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 106, 0);

  // var x = 100;
  // while(x < 1800) {
  //   rect(x, 100, 20, 20);
  //   x = x + 30;
  // }

  for(var x = 100; x < 1800; x = x + 30) {
    rect(x, 100, 20, 20);
  }

  // for(var i = 0; i < 10; i = i + 1) {
  //   console.log(i);
  // }

  var i = 0;
  while(i < 10) {
    console.log(i);
    i = i + 1;
  }

  var x = 0;
  while(x < width) {
    line(x, 0, x, height);
    x = x + 1;
  }
}





