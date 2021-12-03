function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	//place the canvas in the respective HTML element
	canvas.parent('canvas');
	//initialize all the required variables and functions for the mario game
	instializeInSetup(mario);

	//access the webcam
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	//initialize poseNet
	poseNet = ml5.poseNet(video, modelLoaded);
	//execute poseNet
	poseNet.on('pose', gotPoses);
}

//define modelLoaded() function
function modelLoaded(){
	console.log("Model is Loaded!");
}

function draw() {
	game();
}

//define gotPoses() function to get results 
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		//console.log("Nose X = " + noseX + "  , Nose Y = " + noseY);
	}	
}