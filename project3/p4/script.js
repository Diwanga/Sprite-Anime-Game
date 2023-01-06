/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0; // for slow down sprite anim


class enemy {

    constructor() {
        this.image = new Image();
        this.image.src = '../enemies/enemy4.png'
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2;// size of character
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)

        this.speed = Math.random() * 4 + 1;  // number betwoeen -2 and 2 
        this.angle = 0;
        this.angleSpeed = Math.random() * 2+ 0.5;
        this.curve = Math.random() * 200;
        this.interval =Math.floor( Math.random()*100 +50)

    }
    update() {

        if(gameFrame % this.interval  == 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -=dx/70;
        this.y -=dy/70;

        // anmate sprites
        if (gameFrame % this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    
    }

}


for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new enemy());
}
console.log(enemiesArray)

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate)
    gameFrame++;

}

animate();
