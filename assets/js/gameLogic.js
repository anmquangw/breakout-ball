function ballLogic(initBall, ballStroke, paddleH = 0){
  // right
  if (ballStroke.ballRight > canvW){
    initBall.moveX = -initBall.moveX;
  }
    
  // // left
  if (ballStroke.ballLeft < 0){
    initBall.moveX = -initBall.moveX;
  }

  // // top
  if (ballStroke.ballTop < 0){
    initBall.moveY = -initBall.moveY;
  }

  // // bottom
  if (ballStroke.ballBottom > canvH - paddleH - 5){
    initBall.moveY = -initBall.moveY;
    // gameOver();
  }

  initBall.ballX += initBall.moveX;
  initBall.ballY += initBall.moveY;
}