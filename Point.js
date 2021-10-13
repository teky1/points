class Point {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.vx = Math.random()*1.5-0.75;
    this.vy = Math.random()*1.5-0.75;

    this.radius = 5;
    this.color = "white"
    this.maxLineShowDist = Math.max(canvas.width/8, canvas.height/8);
  }
  draw(){
    this.x += this.vx;
    this.y += this.vy;

    if(this.x > canvas.width+this.radius*2){
      this.x = -this.radius*2;
    } else if(this.x < -this.radius*2){
      this.x = canvas.width+this.radius*2;
    }

    if(this.y > canvas.height+this.radius*2){
      this.y = -this.radius*2;
    } else if(this.y < -this.radius*2){
      this.y = canvas.height+this.radius*2;
    }

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  drawLine(otherPoint){

    let dist = Math.hypot(this.x-otherPoint.x, this.y-otherPoint.y);
    let strength = -dist/this.maxLineShowDist+1;
    if(strength<0){strength=0;}


    ctx.strokeStyle = "rgba(255, 255, 255, "+strength+")";

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(otherPoint.x, otherPoint.y);
    ctx.stroke();

    return strength>0;
  }

}
