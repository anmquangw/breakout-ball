function drawPaddle(initPaddle) {
  let {paddleH, paddleW, paddleColor} = initPaddle;
  context.rect(initPaddle.paddleX, initPaddle.paddleY, paddleW, paddleH);
  context.fillStyle = paddleColor;
  context.fill();
}

function drawBall(initBall){
  let {ballR, ballX, ballY, ballColor, ballStrokeColor} = initBall;

  context.arc(ballX, ballY, ballR, 0, Math.PI * 2, false);
  context.fillStyle = ballColor;
  context.fill();
  context.strokeStyle = ballStrokeColor;
  context.stroke();
}

function drawScreen(screenW, screenH){
  let canvW = screenW >= 1200 ? 1200 : screenW - 48;
  let canvH = screenH - 150;
  myCanvas.width = canvW;
  myCanvas.height = canvH;
  return {canvW, canvH};
}

function cls(beginX, beginY, endX, endY){
  context.clearRect(beginX, beginY, endX, endY);
}