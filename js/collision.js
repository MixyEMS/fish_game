function momFruitCollision(){
	for(var i =0;i<fruit.num;i++){
		if(fruit.alive[i]){
			var l = calLength2(fruit.x[i],fruit.y[i],Mom.x,Mom.y)
			if(l<900){
				fruit.dead(i);
				
			}
		}
	}
}