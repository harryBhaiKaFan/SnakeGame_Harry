const board=document.querySelector("#board");
//getting elems done here

let foodSound = new Audio("../music/food.mp3");
let gameOverSound = new Audio("../music/gameover.mp3");
let moveSound = new Audio("../music/move.mp3");
let musicSound = new Audio("../music/music.mp3");


//music stuff end here 🎵🎶

let timeR=200;
let lastPaintTime=null;
let soundEnabled=false;
//speedy stuff here 🚀 + sounds 📣

let snakeArr = [
	{
		x:13,
		y:15
	}
]

snakeArr.push({x:13,y:16});
snakeArr.push({x:13,y:17});

let food = {x:10,y:10};
let inputDir = {x:0,y:-1};
let score = 0;
//#### the snake 🐍 position array + others


board.onclick=(e)=>
{
	if(confirm("Do you want sound ?")==true)
	{
		soundEnabled=true;
		musicSound.loop=true;
		
		if(musicSound.paused)
		{
			musicSound.play().then((succ)=>{
			
			}).catch((err)=>{
				alert(err.message)
			})
		}
	}else if(!musicSound.paused){
			musicSound.pause();
	}
}
//#### window.ondblclick 🔛

function isCollide(snake)
{
	for (let i = 1; i < snake.length; i++) {
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
		return(true);
	}
	
	if(snake[0].x > 18 || snake[0].x < 1 || snake[0].y > 18 || snake[0].y < 1)return(true);
	
	return(false);
}
//####

function gameEngine(){
	//Move snake
	for (let i = snakeArr.length-2; i >= 0; i--) 
	{
		snakeArr[i+1] = {...snakeArr[i]};
	}
	snakeArr[0].x+=inputDir.x;
	snakeArr[0].y+=inputDir.y; // a common thing -> moving coords...
	
	//render
	board.innerHTML="";
	snakeArr.forEach((val,i)=>{
		let snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart=val.y;
		snakeElement.style.gridColumnStart=val.x;
		
		if(i==0){
			snakeElement.classList.add("snakeHead");
		}else{
			snakeElement.classList.add("snakeBody");
		}
		board.appendChild(snakeElement);
	});
	let foodElement = document.createElement("div");
		foodElement.style.gridRowStart=food.y;
		foodElement.style.gridColumnStart=food.x;
		foodElement.classList.add("snakeFood");
		board.appendChild(foodElement);
	
	//Collide
	if(isCollide(snakeArr))
	{
		gameOverSound.play();
		if(!musicSound.paused)
		musicSound.pause();
		
		inputDir={x:0,y:-1};
		alert("Game over press any key or Ok to play again , Your Score : "+score);
		snakeArr=[{x:13,y:15}];
		snakeArr.push({x:13,y:16});
		snakeArr.push({x:13,y:17});

		score=0;
		scoreID.innerHTML="Score: 0"
	}
	
	//Food
	if(snakeArr[0].y == food.y && snakeArr[0].x == food.x)
	{
		snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y})
		score++;
		foodSound.play();
		let a=2,b=16;
		let isSame=true;
		
		while(isSame){
			
		food={x:Math.round(a+(b-a)*(Math.random())),y:Math.round(a+(b-a)*(Math.random()))};
		
		isSame=false;
		for(let i=0;i<snakeArr.length;i++){
			if(snakeArr[i].x==food.x && snakeArr[i].y==food.y){
				isSame=true;
				break;
				}
			}
			
		}
	scoreID.innerHTML="Score: "+score;
	}
	//#####
}
//#### the game engine 🚂


function main(currTime){
	if(lastPaintTime == null){
		lastPaintTime=currTime;
	}
	
	if((currTime-lastPaintTime) >= timeR){
		gameEngine();
		lastPaintTime=currTime;
	}
	window.requestAnimationFrame(main);
}
//####
/*moveSound.oncanplay=(e)=>{*/
	if(alert("Press any key or OK to start") || true)
	{
		window.requestAnimationFrame(main);
	}
/*}*/
//####

function moveUp()
{
	if(inputDir.y == 1) return;
	inputDir.x=0;
	inputDir.y=-1;
}
//####

function moveDown()
{
	if(inputDir.y == -1) return;
	inputDir.x=0;
	inputDir.y=1;
}
//####

function moveLeft()
{
	if(inputDir.x == 1) return;
	inputDir.x=-1;
	inputDir.y=0;
}
//####

function moveRight()
{
	if(inputDir.x == -1) return;
	inputDir.x=1;
	inputDir.y=0;
}
//####

window.onkeydown=(e)=>{
	moveSound.play();
	
	switch (e.key) {
		case "ArrowUp":
			moveUp();
			break;

		case "ArrowDown":
			moveDown();
			break;
			
		case "ArrowLeft":
			moveLeft();
			break;
			
		case "ArrowRight":
			moveRight();
			break;
			
		default:
			break;
	}
}
//####

window.onload=(e)=>{
	let up=document.querySelector(".up");
	let down=document.querySelector(".down");
	let right=document.querySelector(".right");
	let left=document.querySelector(".left");
	
	
	up.onclick=(e)=>{
		moveSound.play();
		moveUp();
	}
	
	down.onclick=(e)=>{
		moveSound.play();
		moveDown();
	}
	
	right.onclick=(e)=>{
		moveSound.play();
		moveRight();
	}
	
	left.onclick=(e)=>{
		moveSound.play();
		moveLeft();
	}
}
//####
