var momObj = function() {
    this.x;
    this.y;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.angle;


    this.momTailTimer;
    this.bmomTailCount;

    this.momEyeTimer;
    this.momEyeCount;
    this.momEyedur;

    this.momBodyTimer;
    this.momBodyCount;

}

momObj.prototype.init = function() {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.bigEye.src = 'src/bigEye0.png';
    this.bigBody.src = 'src/bigSwim0.png';
    this.bigTail.src = 'src/bigTail0.png';
    this.angle = 0;

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyedur = 50;

    this.momBodyTimer = 0;
    this.momBodyCount = 0;

}

momObj.prototype.draw = function() {
    this.x = lerpDistance(mx, this.x, 0.9);
    this.y = lerpDistance(my, this.y, 0.9);

    var detalX = mx - this.x;
    var detalY = my - this.y;
    var beta = Math.atan2(detalY, detalX) + Math.PI;

    this.angle = lerpAngle(beta, this.angle, 0);

    this.momTailTimer += detalTime;
    if (this.momTailTimer > 50) {
        this.momTailCount = this.momTailCount + 1;
        this.momTailTimer = 0;

        if (this.momTailCount > 7) {
            this.momTailCount = 0;
        }
    }

    this.momEyeTimer += detalTime;
    if (this.momEyeTimer > this.momEyedur) {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer = 0;

        if (this.momEyeCount == 0) {
            this.momEyedur = Math.random() * 1000 + 1000;
        } else {
            this.momEyedur = 200;
        }
    }

    // this.momBodyTimer += detalTime;
    // if (this.momBodyTimer > 300) {
    //     this.momBodyCount = this.momBodyCount + 1;
    //     this.momBodyTimer = 0;

    //     if (this.momBodyCount > 7) {
    //         this.momBodyCount = 7;
    //     }
    // }
    var momEyeCount = this.momEyeCount;
    var momTailCount = this.momTailCount;
    var momBodyCount = this.momBodyCount;
    
    if(data.double ==1){
         this.bigBody = momBodyOrange[momBodyCount];
    }
    else{
         this.bigBody = momBodyBlue[momBodyCount];
    }
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(momTail[momTailCount], momTail[momTailCount].width * 0.4, -momTail[momTailCount].height * 0.5);
    ctx1.drawImage(this.bigBody , -this.bigBody .width * 0.5, -this.bigBody .height * 0.5);

    ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);
    ctx1.restore();
}