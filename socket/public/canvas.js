const canvas= document.querySelector('canvas');
const context= canvas.getContext('2d');

const buttonSpeed = document.getElementById("canvasButton");

canvas.width = (window.innerWidth)/3;
//rectangle
for(var i=0;i<(Math.random()*70)+30;i++){
    let x=(Math.random()*400)+1;
    let y=(Math.random()*400)+1;
    context.fillStyle= "rgba(0,0,255,0.5)";
    context.fillRect(x,y,100,20);
    context.fillStyle= "#" + ((1<<24)*Math.random() | 0).toString(16);
    context.fillRect(x,y,150,20);
}
//line
context.beginPath();
context.moveTo(20,30);
context.lineTo(10,400);
context.lineTo(400,10);
context.strokeStyle="red";
context.stroke();
//circle
for(var i=0;i<(Math.random()*70)+30;i++){
    let x=(Math.random()*400)+1;
    let y=(Math.random()*400)+1;
    context.beginPath();
    context.arc(x,y,30,0,Math.PI*2,false);
    context.strokeStyle= "#" + ((1<<24)*Math.random() | 0).toString(16);
    context.stroke();
}
let x=Math.random() * 550;
let y=Math.random() * 150;
let dx=1.4;
let dy=1;
let radius=30;
let speed=0;
//animation
function generateFigure(){
    speed+=1;
    console.log("speed #"+speed);
    buttonSpeed.innerHTML= "Faster!";
    doAnimation();
}

function doAnimation(){
    requestAnimationFrame(doAnimation);
    context.clearRect(0,0,innerWidth,innerHeight);
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2,false);
    context.strokeStyle= "#" + ((1<<24)*Math.random() | 0).toString(16);
    context.fill="blue";
    context.stroke();
    if (x +radius > 550 || x - radius < 0 ){
        dx=-dx;
    }
    if(y +radius > 150 || y- radius < 0){
        dy=-dy;
    }
    x+=dx;
    y+=dy;
}