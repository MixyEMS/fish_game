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

var mx;
var my;

var baby;

var babyEye = [];
var babyBody = [];

var momEye = [];
var momTail = [];
var momBodyOrange = [];
var momBodyBlue = [];

var data;

var wave ;

var halo;

var dustPic=[];
var dust;

function game() {
    init();
    lastTime = Date.now();
    detalTime = 0;
    gameloop();
}

function init() {
    //获取canvas context
    can1 = document.getElementById("canvas1"); //fish dust  ui
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2"); //bg fruits ane
    ctx2 = can2.getContext("2d");

    can1.addEventListener("mousemove", onMouseMove);

    bgPic.src = 'src/background.jpg';
    canWidth = can1.width;
    canHeight = can1.height;;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    Mom = new momObj();
    Mom.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    baby = new babyObj();
    baby.init();

    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = 'src/babyEye' + i + '.png';
    }

    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = 'src/babyFade' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = 'src/bigTail' + i + '.png';
    }

    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = 'src/bigEye' + i + '.png';
    }
    for (var i = 0; i < 8; i++) {
        momBodyOrange[i] = new Image();
        momBodyOrange[i].src = 'src/bigSwim' + i + '.png';
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = 'src/bigSwimBlue' + i + '.png';
    }

    data = new dataObj();

    wave =new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    for(var i =0;i<7;i++){
         dustPic[i] = new Image();
        dustPic[i].src='src/dust'+i+'.png';
    }

    dust = new dustObj();
    dust.init();

}

function gameloop() {
    requestAnimFrame(gameloop);
    var now = Date.now();
    detalTime = now - lastTime;
    lastTime = now;

    drawBackground();
    ane.draw();
    fruit.draw();
    fruitMonitor();

    ctx1.clearRect(0, 0, canWidth, canHeight);
    Mom.draw();

    momFruitCollision();
    momBabyCollision();

    baby.draw();
    data.draw();

    wave.draw();
    halo.draw();

    dust.draw();
}

function onMouseMove(e) {
    if(data.gameOver){
        return false;
    }
    if (e.offsetX || e.layerX) {
        mx = e.offsetX ? e.offsetX : e.layerX;
        my = e.offsetY ? e.offsetY : e.layerY;
    }
}