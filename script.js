const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
console.log(ctx);

const playerImage = new Image(); // image constructor
playerImage.src = './project 1/shadow_dog.png'
let x = 0;



function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x,50,100,100);
    requestAnimationFrame(animate);// only one time
    x++;


}
animate();