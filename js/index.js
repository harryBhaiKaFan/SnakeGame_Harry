let direction = {x:0,y:0};
let foodSound = new Audio("../music/food.mp3");
let gameOverSound = new Audio("../music/gameover.mp3");
let moveSound = new Audio("../music/move.mp3");
let musicSound = new Audio("../music/music.mp3");
//music stuff end here
let speed=3,lastPaintTime=0; //speedy stuff here
let snakeArr = [
	{
		x:13,
		y:15
	}
]
//####


window.ondblclick=(e)=>
{
	musicSound.oncanplay=(e)=>{
		musicSound.play();
	}
	window.ondblclick=null;
}


function main(currTime){
	if((currTime - lastPaintTime)/1000 < 1/speed);else{
		
		gameEngine();
		lastPaintTime=currTime;
	}
	window.requestAnimationFrame(main);
}

function gameEngine(){
	//####
	
	//####
	board.innerHTML="";
	snakeArr.forEach((val,i)=>{
		let snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart=`${val.y}`
		
		
	})
}


window.onkeydown=(e)=>{
  switch(e.key){
    case 'ArrowUp':
      
      break;
    case 'ArrowDown':
      
      break;
    case 'ArrowLeft':
      
      break;
    case 'ArrowRight':
      
      break;
  }
}


window.requestAnimationFrame(main);