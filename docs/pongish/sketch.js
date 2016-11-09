var x;
var y;
var dx;
var dy;
var r;
var px;
var py;
var cx;
var cy;
var speed = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	x = width/2;
	y = height/2;
	dx = random(-10, 10);
	dy = random(-10, 10);
	r = height/25;
	rectMode(CENTER);
	px = 15;
	py = height/2;
	cx = width-px;
	cy = py;
}

function draw() {
	field();
	ball();
	paddle1();
	paddle2();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function field() {
	background(0);
	var NUM = 10;
	rectMode(CENTER);
	fill(255);
	for(var i = 0; i < NUM; i++)
		rect(width/2, 2*i*height/NUM, width/100, height/NUM);
}

function ball() {
	ellipse(x, y, r*2, r*2);
	// dx = rotationX;
	// dy = rotationY;
	x+=dx;
	y+=dy;
	if(x < 0) x = width;
	if(x > width) x = 0;
	if(x > px-2+r && x < px+2+r)
		if(y+r < py + height/10 || y+r > py - height/10)
			dx = -dx;
	if(x > cx-2-r && x < cx+2-r)
		if(y+r < cy + height/10 || y+r > cy - height/10)
			dx = -dx;
	if(y < r || y > height-r) dy = -dy;
}

function paddle1() {
	rect(px, py, width/100, height/5);
}

function paddle2() {
	if(y > cy) cy += speed;
	else if (y < cy) cy -= speed;

	if(cy > height-height/10) cy = height-height/10;
	else if(y < height/10) cy = height/10;
	rect(cx, cy, width/100, height/5);
}

function keyPressed() {
	if(keyCode == LEFT)
		console.log("Left");
	else if(keyCode == RIGHT)
		console.log("Right");
}