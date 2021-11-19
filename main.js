function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	//place the canvas in the respective HTML element
	canvas.parent('canvas')
	//initialize all the required variables and functions for the mario game
	instializeInSetup(mario);
}

function draw() {
	game()
}