let body = document.querySelector('body');
let myCanvas = body.querySelector('.myCanvas');
let context = myCanvas.getContext('2d');

let ball = {
  ballSpeed: 2,
  moveX: 2,
  moveY: -2,
  ballColor: 'red',
  ballStrokeColor: 'black',
};


let paddle = {
  paddleSpeed: 7,
  paddleColor: 'red',
};


function move(box, initBall, initPaddle, isRun){
  if(localStorage.getItem('isRun') === "false") return;
  requestAnimationFrame(() => move(box, initBall, initPaddle, isRun));
  
  let {canvW, canvH} = box;
  

  cls(0, 0, canvW, canvH);

  context.beginPath();

  drawBall(initBall);
  drawPaddle(initPaddle);
  drawScore();
  context.closePath();

  let ballStroke = {
    ballTop: initBall.ballY - initBall.ballR,
    ballRight: initBall.ballX + initBall.ballR,
    ballBottom: initBall.ballY + initBall.ballR,
    ballLeft: initBall.ballX - initBall.ballR
  };
  let paddleStroke = {
    paddleRight: initPaddle.paddleX + initPaddle.paddleW,
    paddleLeft: initPaddle.paddleX
  }
  
  ballLogic(initBall, ballStroke);

  try{
    if(ballStroke.ballBottom > canvH - initPaddle.paddleH){
      if(initBall.ballX > paddleStroke.paddleLeft - initBall.ballR / 2 && initBall.ballX < paddleStroke.paddleRight + initBall.ballR / 2) {
        initBall.moveY = -(initBall.moveY + 5);
        ballLogic(initBall, ballStroke);
        setTimeout(() => score++, 800)
      }
      else throw "over";
    }
  }
  catch(e){
    gameOver();
  }
  

  if(key.rightPressed && paddleStroke.paddleRight < canvW) {
      initPaddle.paddleX += initPaddle.paddleSpeed;
  }
  if(key.leftPressed && paddleStroke.paddleLeft > 0) {
      initPaddle.paddleX -= initPaddle.paddleSpeed;
  }
}

function mainGame(isRun){
  if(!screen) return;

  let screenW = outerWidth;
  let screenH = outerHeight;
  let box = {canvW, canvH} = drawScreen(screenW, screenH);

  let initPaddle = {
    paddleX: (canvW - canvW / 8) / 2,
    paddleY: canvH - 10,
    paddleH: 10,
    paddleW: canvW / 8,
    ...paddle,
  };


  let ballR = Math.min(canvW, canvH) * 0.035;
  let initBall = {
    ballR,
    ballX: canvW / 2 - ballR,
    ballY: canvH - ballR - (initPaddle.paddleH + 5),
    ...ball,
  };

  move(box, initBall, initPaddle, isRun);
}

function begin(state){
  if(state){
    mainGame(state);
    body.onresize = () => mainGame(state);
  }
}