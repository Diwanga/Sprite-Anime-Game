const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './backgroundLayers/layer-1.png'

const backgroundLayer2 = new Image();
backgroundLayer2.src = './backgroundLayers/layer-2.png'

const backgroundLayer3 = new Image();
backgroundLayer3.src = './backgroundLayers/layer-3.png'

const backgroundLayer4 = new Image();
backgroundLayer4.src = './backgroundLayers/layer-4.png'

const backgroundLayer5 = new Image();
backgroundLayer5.src = './backgroundLayers/layer-5.png'


let gameSpeed = 5;

let x =0;
let y = 2400;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(backgroundLayer1, x, 0);
   if(x == -2400) x = 2400 - gameSpeed +y;
   else x=x-gameSpeed;

    ctx.drawImage(backgroundLayer5, y, 0);

    if(y == -2400) y = 2400 -gameSpeed +x;  // adding x and -gamspeed are done for remove space
    else y=y-gameSpeed;
   

    requestAnimationFrame(animate);
}
animate();