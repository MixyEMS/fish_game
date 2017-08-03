var momObj = function(){
	  this.x;
	  this.y;
	  this.bigEye = new Image();
	  this.bigBody = new Image();
	  this.bigTail = new Image();
	  this.angle;
	 
}

momObj.prototype.init = function(){
	 this.x = canWidth*0.5;
	 this.y = canHeight*0.5;
	 this.bigEye.src = 'src/bigEye0.png';
	 this.bigBody.src = 'src/bigSwim0.png';
	 this.bigTail.src = 'src/bigTail0.png';
	  this.angle=0;
	  
}

momObj.prototype.draw = function(){
	this.x=lerpDistance(mx,this.x,0.9);
	this.y=lerpDistance(my,this.y,0.9);
    
    var detalX=mx-this.x;
    var detalY=my - this.y;
    var beta = Math.atan2(detalY,detalX)+Math.PI;

    this.angle = lerpAngle(beta,this.angle,0);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	 ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	 ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	 ctx1.drawImage(this.bigTail,this.bigTail.width*0.4,-this.bigTail.height*0.5);
   ctx1.restore();
}