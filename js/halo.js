var haloObj = function(){
	this.x=[];
	this.y=[];
	this.alive=[]
	this.r=[];
}

haloObj.prototype.num = 5;

haloObj.prototype.init = function(){
	for(var i =0;i<this.num;i++){
		this.alive[i] = false;
	}
}

haloObj.prototype.draw = function(){
	ctx1.save()
	ctx1.lineWidth = 2;
	ctx1.shadowBlur=30;
	ctx1.shadowColor='purple';
	for(var i =0 ; i<this.num ; i++){
		if(this.alive[i]){
			this.r[i] +=detalTime*0.06;
			if(this.r[i]>50){
				this.alive[i]= false;
				break;
			}
			var alpha = 1-this.r[i]/50;
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
		    ctx1.closePath();
		    ctx1.strokeStyle = "rgba(222,155,58,"+alpha+")";
		    ctx1.stroke();
		}
	}
	ctx1.restore();
}

haloObj.prototype.born = function(x,y){
	 for(var i =0 ; i<this.num ; i++){
		if(!this.alive[i]){
          console.log("wave born");
          this.alive[i]=true;
          this.r[i]=10;
          this.x[i]=x;
          this.y[i]=y;
          return;
		}
	}
}