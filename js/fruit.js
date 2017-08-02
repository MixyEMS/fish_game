var fruitObj = function(){
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
   
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function(){

	for(var i =0; i<this.num ; i++){
		 this.alive[i] = false;
		 this.born(i);
	}

	this.orange.src = 'src/fruit.png';
	this.blue.src = 'src/blue.png';


}

fruitObj.prototype.draw = function(){
     for(var i =0 ; i <this.num ;i++){
		 ctx2.drawImage(this.orange,this.x[i],this.y[i]);
	}
}

fruitObj.prototype.update = function(){
	var num = 0;
	for(var i =0 ; i <this.num ;i++){
		 this.alive[i]?num++:num;
	}
}

fruitObj.prototype.born = function(i){
	 var aneId = Math.floor(Math.random()*ane.num);
     this.x[i] = ane.x[aneId];
     this.y[i] = canHeight - ane.len[aneId];
}