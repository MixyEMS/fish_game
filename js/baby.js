var babyObj = function(){
	this.x;
	this.y;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
	this.angle;
}

babyObj.prototype.init = function(){
	 this.x = canWidth*0.5;
	 this.y = canHeight*0.5;

	 this.babyEye.src = 'src/babyEye0.png';
	 this.babyBody.src = 'src/babyFade0.png';

	 this.babyTail.src = 'src/babyTail0.png';
     this.angle =0;
  
}

babyObj.prototype.draw = function(){
	this.x=lerpDistance(Mom.x,this.x,0.97);
	this.y=lerpDistance(Mom.y,this.y,0.97);
    
    var detalX=Mom.x-this.x;
    var detalY=Mom.y - this.y;
    var beta = Math.atan2(detalY,detalX)+Math.PI;

    this.angle = lerpAngle(beta,this.angle,0);
	ctx1.save();
	ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
      ctx1.drawImage(this.babyTail,this.babyTail.width*0.3,-this.babyTail.width*0.6);
     ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.width*0.5);
   
      ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.4);
     ctx1.restore();
}