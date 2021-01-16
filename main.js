// キャンバス
let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext('2d')
// パドル
let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width - paddleWidth)/2

let rightPressed = false
let leftPressed = false

// ボール
let x = canvas.width/2;
let y = canvas.height-30;
let dx = -2;
let dy = -2;

let ballRabius = 10

// ブロック
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight =20;
let brickPadding = 5;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks =[]
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    console.log(r);
    bricks[c][r] = {x:0,y:0,status:1};
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r]
      if (b.status == 1) {
        if (x >b.x && x < b.x +brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy
          b.status = 0
        }
      }
    }
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX
        bricks[c][r].y = brickY
        ctx.beginPath()
        ctx.rect(brickX,brickY,brickWidth,brickHeight)
        ctx.fillStyle="#0095DD"
        ctx.fill()
        ctx.closePath()
      }
    }
  }
}

function keyDownHandler(e) {
  console.log(e.key);
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true
  }
  else if(e.key =="Left" || e.key=="ArrowLeft"){
    leftPressed=true
  }
}

function keyupHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false
  }
  else if(e.key =="Left" || e.key=="ArrowLeft"){
    leftPressed=false
  }
}

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRabius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth,paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawBall()
  drawBricks();
  drawPaddle()
  collisionDetection()
  if (rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7
  }else if (leftPressed && paddleX > 0) {
    paddleX -=7
  }

  if (y+dy < ballRabius ) {
    dy = -dy
  }else if ( y+dy > canvas.height - ballRabius) {
    if (x>paddleX && x<paddleX+paddleWidth) {
      dy = -dy
    }else{
      clearInterval(interval)
      alert("GAME OVER")
    }

  }
  if (x+dx > canvas.width -ballRabius|| x+dx < ballRabius) {
    dx = -dx
  }
  x += dx;
  y += dy;
}

let interval=setInterval(draw,10)
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyupHandler, false);


class Game {
  constructor(){
    // this.ball = Ball()
    // this.paddle = Paddle()
    // this.block = Block()
  }
  start(){
    console.log("dd");
  }

}

const game = new Game();
game.start();

class Ball{
  constructor(){
    // this.ball = Ball()
    // this.paddle = Paddle()
    // this.block = Block()
  }
}
class Paddle{
  constructor(){
    // this.ball = Ball()
    // this.paddle = Paddle()
    // this.block = Block()
  }
}

class Block{
  constructor(){
  }
}
// if (y+dy<0) {
//   dy = -dy
// }
// if (y+dy > canvas.height) {
//   dy = -dy
// }
// ctx.fillStyle ="green"
// ctx.fillRect(10,10,100,100)
// ctx.beginPath();
// ctx.rect(10,0,50,50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240,160,20,0,Math.PI*2,false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath()
