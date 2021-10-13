class HUD {
   constructor(){
     this.overlayOpacity = 1.0;
     this.help = true;
   }
   drawOverlay(points, connections){
     let arbitraryUnit = Math.max(canvas.width, canvas.height)
     ctx.font = arbitraryUnit / 15 + "px Arial";
     ctx.fillStyle = 'rgba(255, 255, 255, '+this.overlayOpacity+')';
     ctx.fillText(points, canvas.width - arbitraryUnit*points.toString().length/27 - arbitraryUnit/100, arbitraryUnit / 17);
     ctx.font = arbitraryUnit / 20 + "px Arial";
     ctx.fillStyle = 'rgba(200, 200, 200, '+this.overlayOpacity+')';
     ctx.fillText(connections, canvas.width - arbitraryUnit*connections.toString().length/32 - arbitraryUnit/500, arbitraryUnit/17+arbitraryUnit/ 23);
   }
}
