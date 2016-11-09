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
	dy = random(-5, 5);
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
	checkScore();
	checkKeys();
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

	x+=dx;
	y+=dy;

	if(y > py - height/10 && y < py + height/10) {
<<<<<<< HEAD
		if(x - r < px + width/200 && x > 0) {
			var slope = dy / dx;
=======
		if(x - r < px + width/200)
>>>>>>> parent of 2004207... prevent bounces from behind paddles
			dx *= -1.1;
			dy = dx * slope;
		}
	}

	if(y > cy - height/10 && y < cy + height/10) {
<<<<<<< HEAD
		if(x + r > cx + width/200 && x < width)
			var slope = dy / dx;
=======
		if(x + r > cx + width/200)
>>>>>>> parent of 2004207... prevent bounces from behind paddles
			dx *= -1.1;
			dy = dx * slope;
	}

	if(y < r || y > height-r) dy = -dy;
}

function paddle1() {
	rect(px, py, width/100, height/5);
}

function paddle2() {
	if(y > cy+8) cy += speed;
	else if (y < cy-8) cy -= speed;

	if(cy > height-height/10) cy = height-height/10;
	else if(cy < height/10) cy = height/10;
	rect(cx, cy, width/100, height/5);
}

function checkKeys() {
	if(keyIsPressed) {
		if(keyCode == UP_ARROW)
			py -= speed;
		else if(keyCode == DOWN_ARROW)
			py += speed;
	}
}

function checkScore() {
	if(x < -4*r || x > width + 4*r) {
		console.log("GOAL!");
		x = width/2;
		y = height/2;
		dx = random(-10, 10);
		dy = random(-5, 5);
	}
}