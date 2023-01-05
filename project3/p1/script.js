/**@type {HTMLCanvasElement} */
const canvas  = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0; // for slow down sprite anim


/*
enemy1 = {
    x:156,
    y:150,
    width:200,
    height:200,

}
 
function animate(){

    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemy1.x++;
    ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height)
    requestAnimationFrame(animate)
}

animate();
*/
// lets create class for create more instance of enemy

class enemy{

    constructor(){
        this.image = new Image();
        this.image.src = '../enemies/enemy1.png'
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random()*(canvas.width - this.width);
        this.y = Math.random()*(canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)

        this.speed = Math.random()*4 - 2 ;  // number betwoeen -2 and 2 
    }
    update(){
    //    this.x++;
    //    this.y++;
    // this.x +=this.speed; // bats going out
    // this.y +=this.speed; 
    this.x += Math.random() * 3 -1.5; 
    this.y += Math.random() * 3 -1.5; 
    // anmage sprites
    if(gameFrame % this.flapSpeed == 0){
    this.frame > 4 ? this.frame=0 : this.frame++;
    }
}
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image,this.spriteWidth*this.frame,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
      //  ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}



const enemy1 = new enemy();
const enemy2 = new enemy();

for(let i = 0; i < numberOfEnemies;i++){
enemiesArray.push(new enemy()); 
}
console.log(enemiesArray)

function animate(){

ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
// enemy1.update();
// enemy1.draw();
enemiesArray.forEach(enemy =>{
enemy.update();
enemy.draw();
})
    requestAnimationFrame(animate)
    gameFrame++;
}

animate();
