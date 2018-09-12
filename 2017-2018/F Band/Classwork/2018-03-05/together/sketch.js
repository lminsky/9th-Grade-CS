function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 200, 200);
  console.log(width);
  // for(var i = 30; i < width; i = i + 7) {
  //   console.log("Line");
  //   line(i, 0, i, height);
  // }

  for(var i = 0; i < 20; i = i + 1) {
    line(10 + i * 50, 0, 10 + i * 50, height);
  }
}
