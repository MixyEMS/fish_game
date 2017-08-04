function momFruitCollision() {
	if(data.gameOver){
		 return;
	}
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            var l = calLength2(fruit.x[i], fruit.y[i], Mom.x, Mom.y)
            if (l < 900) {
                fruit.dead(i);
                data.fruitNum++;
                Mom.momBodyCount++;
                if(Mom.momBodyCount>7){
                	Mom.momBodyCount = 7;
                }
                if(fruit.fruitType[i] == 'blue'){
                	data.double = 2;
                }

            }
        }
    }
}

function momBabyCollision() {
	if(data.gameOver){
		return;
	}
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            var l = calLength2(baby.x, baby.y, Mom.x, Mom.y)
            if (l < 900&&data.fruitNum>0) {
               baby.recover();
               data.addScore();
               data.reset();
               Mom.momBodyCount = 0;
            }
        }
    }
}