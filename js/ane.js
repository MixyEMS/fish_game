var aneObj = function() {
    this.x = [];
    this.len = [];

    this.rootx = [];

    this.headx = [];
    this.heady = [];

    this.alpha = 0;
    this.amp = [];
}

aneObj.prototype.num = 50;

aneObj.prototype.init = function() {

    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;
        this.heady[i] = canHeight - 300 + Math.random() * 50;
        this.headx[i] = this.rootx[i];

        this.amp[i] = Math.random() * 20 + 15;
    }
}

aneObj.prototype.draw = function() {

    this.alpha += detalTime * 0.001;
    var l = Math.sin(this.alpha) * 60;
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 18;
    ctx2.lineCap = "round";
    for (var i = 0; i < this.num; i++) {
        this.headx[i] = this.rootx[i] + l + this.amp[i];
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 150, this.headx[i], this.heady[i]);
        ctx2.stroke();

    }
    ctx2.restore();
}