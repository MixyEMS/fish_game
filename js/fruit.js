var fruitObj = function() {
    this.alive = [];
    this.orange = new Image();
    this.blue = new Image();
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType=[];

}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {

    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.spd[i] = Math.random() * 0.8 + 0.05;
       // this.born(i);
	    if(Math.random()<0.7){
	    	 this.fruitType[i]= "orange"
	    }
	    else{
	    	this.fruitType[i]="blue";
	    }
    }
    
    this.orange.src = 'src/fruit.png';
    this.blue.src = 'src/blue.png';


}

fruitObj.prototype.draw = function() {
	var pic ;
    for (var i = 0; i < this.num; i++) {
    	if(this.fruitType[i] == "orange"){
    		pic = this.orange;
    	}
    	else{
    		pic =this.blue;
    	}
        if (this.alive[i] == true) {
        	 this.l[i] += 0.01 * detalTime;
            if (this.l[i] < 15) {
                ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i], this.l[i], this.l[i]);
            } else {
                if (this.y[i] > 0) {
                    this.y[i] -= this.spd[i];
                    ctx2.drawImage(pic, this.x[i] - 15* 0.5, this.y[i], 15, 15);
                } else {
                    this.alive[i] = false;
                    
                }
            }
        }
    }
}

fruitObj.prototype.update = function() {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        this.alive[i] ? num++ : num;
    }
}

fruitObj.prototype.born = function(i) {
    var aneId = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i]=true;
    this.x[i] = ane.x[aneId];
    this.y[i] = canHeight - ane.len[aneId];
}

fruitObj.prototype.dead = function(i){
    this.alive[i]= false;
}
function fruitMonitor(){
	 var num = 0;
	 for(var i =0;i<fruit.num;i++){
	 	  if(fruit.alive[i]){

	 	  	 num++
	 	  }
	 }

	 if(num < 15){

	 	 sendFruit();
	 }

}

function sendFruit(){
	for(var i =0;i<fruit.num;i++){
	 	  if(!fruit.alive[i]){
	 	  	 fruit.born(i);
	 	  	 return;
	 	  }
	 }
}