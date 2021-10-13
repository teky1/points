canvascolor = "rgba(24, 24, 24, 0.3)";

var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');

function randomRange(low, high){
  var difference = high-low;
  var output = Math.random();
  output = Math.round(output*(difference+0.99)-0.5)+low;
  return output;
}

function canvasResize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = 'rgb(24, 24, 24)';
  //ctx.fillStyle = canvascolor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
canvasResize();

points = [];
gui = new HUD();

for(let i = 0; i < 69; i++){
  points.push(new Point());
}

setInterval(function(){

  canvasResize();
  let totalConnections = 0;
  for(let i = 0; i < points.length; i++){
    for(let j = i+1; j < points.length; j++){
      if(points[i].drawLine(points[j])){
        totalConnections++;
      }
    }
    points[i].draw();
  }
  gui.drawOverlay(points.length, totalConnections);
}, 10);
