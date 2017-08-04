var babyObj = function() {
    this.x;
    this.y;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
    this.angle;
    this.babyTailTimer;
    this.babyTailCount;

    this.babyEyeTimer;
    this.babyEyeCount;
    this.babyEyedur;

    this.babyBodyTimer;
    this.babyBodyCount;
}

babyObj.prototype.init = function() {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;

    this.babyEye.src = 'src/babyEye0.png';
    this.babyBody.src = 'src/babyFade0.png';

    this.babyTail.src = 'src/babyTail0.png';
    this.angle = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyedur = 50;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
}

babyObj.prototype.draw = function() {
    this.x = lerpDistance(Mom.x, this.x, 0.97);
    this.y = lerpDistance(Mom.y, this.y, 0.97);

    var detalX = Mom.x - this.x;
    var detalY = Mom.y - this.y;
    var beta = Math.atan2(detalY, detalX) + Math.PI;

    this.angle = lerpAngle(beta, this.angle, 0);

    this.babyEyeTimer += detalTime;
    if (this.babyEyeTimer > this.babyEyedur) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer = 0;

        if (this.babyEyeCount == 0) {
            this.babyEyedur = Math.random() * 1000 + 1000;
        } else {
            this.babyEyedur = 200;
        }
    }

    this.babyBodyTimer += detalTime;
    if (this.babyBodyTimer > 300) {
        this.babyBodyCount = this.babyBodyCount + 1;
        this.babyBodyTimer = 0;

        if (this.babyBodyCount > 19) {
            this.babyBodyCount = 19;
            data.gameOver = true;
        }
    }


    var babyEyeCount = this.babyEyeCount;
    var babyBodyCount = this.babyBodyCount;
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail, this.babyTail.width * 0.3, -this.babyTail.width * 0.6);
    ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].width * 0.5);
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.3);
    ctx1.restore();
}

babyObj.prototype.recover = function() {
    this.babyBodyCount = 0;
}