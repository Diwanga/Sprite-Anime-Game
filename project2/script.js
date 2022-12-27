const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './backgroundLayers/layer-4.png'

let gameSpeed = 5;

let x =0;
let y = 2400;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(backgroundLayer1, x, 0);
   if(x == -2400) x = 2400 - gameSpeed +y;
   else x=x-gameSpeed;

    ctx.drawImage(backgroundLayer1, y, 0);

    if(y == -2400) y = 2400 -gameSpeed +x;  // adding x and -gamspeed are done for remove space
    else y=y-gameSpeed;
   

    requestAnimationFrame(animate);
}
animate();