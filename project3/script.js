/**@type {HTMLCanvasElement} */
const canvas  = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

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
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.width=100;
        this.height=100;
        this.speed = Math.random()*4 - 2 ;  // number betwoeen -2 and 2 
    }
    update(){
    //    this.x++;
    //    this.y++;
    this.x +=this.speed; 
    this.y +=this.speed; 
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
}

animate();
