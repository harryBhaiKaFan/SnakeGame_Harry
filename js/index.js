let direction = {x:0,y:0};
let foodSound = new Audio("../music/food.mp3");
let gameOverSound = new Audio("../music/gameover.mp3");
let moveSound = new Audio("../music/move.mp3");
let musicSound = new Audio("../music/music.mp3");


window.onclick=(e)=>
{
  musicSound.play();
}


function main(currTime){
  window.requestAnimationFrame(main);
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