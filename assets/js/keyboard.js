let key = {
  rightPressed: false,
  leftPressed: false
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39){
    key.rightPressed = true;
    key.leftPressed = false;
  }
  if(e.keyCode == 37){ 
    key.leftPressed = true;
    key.rightPressed = false;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) key.rightPressed = false;
  if(e.keyCode == 37) key.leftPressed = false;
}