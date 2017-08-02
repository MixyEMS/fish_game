document.body.onload = game;

var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var detalTime;

var canWidth;
var canHeight;

var bgPic = new Image();

var ane;

var fruit;


function game(){
	init();
	lastTime = Date.now();
	detalTime = 0;
	gameloop();
}

function init(){
	//获取canvas context
	can1 = document.getElementById("canvas1");//fish dust  ui
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//bg fruits ane
	ctx2 = can2.getContext("2d");

    bgPic.src = 'src/background.jpg';
    canWidth = can1.width;
    canHeight = can1.height;;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

}

function gameloop(){
	requestAnimFrame(gameloop);
	var now = Date.now();
	detalTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruit.draw();
}