let total = localStorage.getItem('total');

let body = document.querySelector('body');
let myCanvas = body.querySelector('.myCanvas');
let context = myCanvas.getContext('2d');

let speed = 2;
let vx = speed;
let vy = -speed;
let ballColor = 'red';
let ballStrokeColor = 'black';


var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

// var paddleHeight = 10;
// var paddleWidth = 75;
var paddleX = myCanvas.width / 2;

function drawPaddle(iWidth, iHeight) {
  context.beginPath();

  context.rect(paddleX, iHeight - 10, 100, 10);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
}
function drawBall(x, y, r){
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.fillStyle = ballColor;
  context.fill();
  context.strokeStyle = ballStrokeColor;
  context.stroke();
}
function drawScreen(width, height){
  let iWidth = width >= 1200 ? 1200 : width;
  let iHeight = height;
  myCanvas.width = iWidth;
  myCanvas.height = iHeight;
  return {iWidth, iHeight};
}
function cls(beginX, beginY, endX, endY){
  context.clearRect(beginX, beginY, endX, endY);
}


function move(iWidth, height, x, y, r, isRun){
  if(localStorage.getItem('isRun') === "false") return;
  requestAnimationFrame(() => move(iWidth, height, x, y, r, isRun));

  cls(0, 0, iWidth, height);
  context.beginPath();

  drawBall(x, y, r);
  drawPaddle(iWidth, height);
  context.closePath();

  // right
  if (r + x > iWidth){
    vx = -vx;
  }
    
  // left
  if (x - r < 0){
    vx = -vx;
  }

  // top
  if (y - r < 0){
    vy = -vy;
  }

  // bottom
  if (y + r > height){
    
    gameOver();
    vy = -vy;
  }


  else if(y + vy > myCanvas.height-r) {
    if(x > paddleX && x < paddleX + 100) {
      vy = -vy;
    }
    else {
    gameOver();

      // lives--;
      // if(!lives) {
      //   alert("GAME OVER");
      //   
      // }
      // else{
        x = myCanvas.width/2;
        y = myCanvas.height-30;
        vx = 3;
        vy = -3;
        paddleX = (myCanvas.width-100)/2;
      // }
    }
  }

  if(rightPressed && paddleX < myCanvas.width) {
      paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
  }


  x += vx;
  y += vy;
}

function mainGame(isRun){
  if(!screen) return;
  
  let width = outerWidth - 48;
  let height = outerHeight - 150;

  let r = Math.min(width, height) * 0.035;
  let x = width / 2 - r
  let y = height - (r + 20);

  let wScroll = width / 8;
  let hScroll = 15;
  let moveX = width / 2 - wScroll / 2;
  let moveY = height - 12;


  let {iWidth, iHeight} = drawScreen(width, height);
  move(iWidth, height, x, y, r, isRun);
}

function begin(state){
  if(state){
    mainGame(state);
    body.onresize = () => mainGame(state);
  }
}