let score = 0;

function drawScore(){
  context.font = "24px Arial bold";
  context.fillStyle = "#FFF";
  context.fillText("Score: "+score, 15, 35);
}