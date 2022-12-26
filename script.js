const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_HEIGHT = canvas.height = 523;
const SPRITE_WIDTH = canvas.height = 575;
console.log(ctx);
const animation = "dizzy";

const playerImage = new Image(); // image constructor
playerImage.src = './project1/shadow_dog.png'
//let x = 0;
let gameFrame = 0;
const straggerFrames = 6;
const spriteAnimation = [];
const animationStates = [
    {
        name: "idle",
        frames:7
    },
    {
        name: "jump",
        frames:7
    },

    {
        name: "fall",
        frames:7
    },

    {
        name: "run",
        frames:9
    },

    {
        name: "dizzy",
        frames:11
    },

    {
        name: "sit",
        frames:5
    },

    {
        name: "roll",
        frames:7
    },

    {
        name: "bite",
        frames:7
    },

    {
        name: "ko",
        frames:12
    },

    {
        name: "getHit",
        frames:4
    },
]

animationStates.forEach((state,index) =>{
    let frames = {
        loc:[],
    }
    for(let j = 0;j<state.frames;j++){
        let positionX = j * SPRITE_WIDTH;
        let positionY = index * SPRITE_HEIGHT;
        frames.loc.push({x:positionX,y:positionY});       
    }
    // spriteAnimation.push({[state.name] : frames});
    spriteAnimation[state.name] = frames;

})
// console.log(spriteAnimation["idle"].loc[3].y);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   let position = Math.floor(gameFrame/straggerFrames) % spriteAnimation[animation].loc.length;// * CLEAN METHOD*
 let frameX = SPRITE_WIDTH * position;
 let  frameY = spriteAnimation[animation].loc[position].y;
   ctx.drawImage(playerImage, frameX, frameY , 575, 523,
                                 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT); // drawimage mthd has 3 versions

    gameFrame++;
    requestAnimationFrame(animate);// only one time
}
animate();




//sprite sheet Width = 6876px /12   573
//sprite sheet Height = 5230px /12  523
//   ctx.fillRect(x,50,100,100);
  //  ctx.drawImage(playerImage, 0, 0 ,CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.drawImage(playerImage,0,0)
 // ctx.drawImage(playerImage,sx,sv,sw,sh,dx,dy,dw,dh); // drawimage mthd has 3 versions
//    x++;