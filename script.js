const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_HEIGHT = canvas.height = 523;
const SPRITE_WIDTH = canvas.height = 575;
console.log(ctx);

const playerImage = new Image(); // image constructor
playerImage.src = './project1/shadow_dog.png'
//let x = 0;
let frameX =4;
let frameY =0;


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 //   ctx.fillRect(x,50,100,100);
  //  ctx.drawImage(playerImage, 0, 0 ,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(playerImage,0,0)
    // ctx.drawImage(playerImage,sx,sv,sw,sh,dx,dy,dw,dh); // drawimage mthd has 3 versions
 ctx.drawImage(playerImage,frameX*SPRITE_WIDTH,frameY*SPRITE_HEIGHT,575,523,0,0,SPRITE_WIDTH,SPRITE_HEIGHT); // drawimage mthd has 3 versions
//    x++;
    requestAnimationFrame(animate);// only one time
}
animate();
//sprite sheet Width = 6876px /12   573 
//sprite sheet Height = 5230px /12  523
