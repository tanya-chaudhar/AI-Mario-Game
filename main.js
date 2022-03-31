function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	coin_collected=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
     gameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
     webcam=createCapture(VIDEO);
	 webcam.parent('gameconsole')
	 webcam.size(800,400);
	 posenet=ml5.poseNet(webcam,modelLoaded);
     posenet.on('pose',gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game()
}
function modelLoaded(){
	console.log("model is loaded");
}
function gotPoses(results){
   if(results.length>0){
	   nosex=results[0].pose.nose.x;
	   nosey=results[0].pose.nose.y;
	  
   }
}






