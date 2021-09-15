const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let dir;
let score;
let balls;
let food;

//function colled

function showgame() {
  dir = 'right'
  score = 0
  balls = [
    { x: 40, y: 40 },
    { x: 60, y: 40 },
    { x: 80, y: 40 },
  ]
}
showgame()

document.addEventListener('keydown',function(e){
  
    let keyCode =e.keyCode;
    if(keyCode==37 && dir !='right'){
        dir='left';
    }
    if(keyCode==38 && dir !='down'){
        dir='up';
    }
    if(keyCode==39 && dir !='left'){
        dir='right';
    }
    if(keyCode==40 && dir !='up'){
        dir='down';
    }
})

//ani function colled
function ani() {
  ctx.clearRect(0, 0, 800, 500)
  balls.shift()
  add()

  ctx.fillStyle = 'red';
  
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    
    if(i==balls.length-1){
        ctx.fillStyle='green';
    }
    else{
        ctx.fillStyle='red'; 
    };
    if (ball.x === 300) {
      ball.x = 0
    }
    if(ball.y==160){
      ball.y=0;
    }
    if(ball.y==-20){
      ball.y=160;
    }
    if(ball.x==-20){
      ball.x=300;
    }
    ctx.fillRect(ball.x, ball.y, 18, 15)
  }
  ctx.fillRect(food.x*10,food.y*10,18,15);
}
//add function
function add() {
  let lastball = balls[balls.length - 1];
  if(dir=='right'){
    balls.push({ x: lastball.x + 20, y: lastball.y })
  }
  if(dir=='down'){
    balls.push({ x: lastball.x , y: lastball.y+20 })
  }
  if(dir=='left'){
    balls.push({ x: lastball.x -20, y: lastball.y })
  }
  if(dir=='up'){
    balls.push({ x: lastball.x , y: lastball.y-20 })
  }
  
}

//create food function
function creatFood(){
   food = {x: Math.floor(Math.random()*29),y: Math.floor(Math.random()*15)};
  
}
function game(){
  let lastball = balls[balls.length - 1];
  if(lastball.x==food.x*10 && lastball.y==food.y*10){
    score++;
    
    creatFood();
  }
}


setInterval(ani, 1000);
