/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 40;
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

// enemy with x minimizing and enemy with y sin wave
class enemy {

    constructor() {
        this.image = new Image();
        this.image.src = '../enemies/enemy2.png'
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)

        this.speed = Math.random() * 4 + 1;  // number betwoeen -2 and 2 
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }
    update() {
        //    this.x++;
        //    this.y++;
        // this.x +=this.speed; // bats going out
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        this.x -= this.speed;
        if (this.x + this.width < 0) {
            this.x = CANVAS_WIDTH
        }
        //  this.y += Math.random() * 3 -1.5; 

        // anmate sprites
        if (gameFrame % this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
        //  ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}



const enemy1 = new enemy();
const enemy2 = new enemy();

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new enemy());
}
console.log(enemiesArray)

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate)
    gameFrame++;

}

animate();
