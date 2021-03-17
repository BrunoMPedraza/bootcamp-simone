const soundKey= new Audio('door_lock.wav');
const soundEnemy= new Audio('enemy.wav');
const key = document.getElementById("key");
const door = document.getElementById('door');
const enemy = document.getElementById('enemy');

window.onload=() =>{
    enemy.style.display="none";
}

function keylock(){
    console.log("oh no!! he is angry!!");
    soundKey.play();
    key.style.display="none";
    setTimeout(()=>{
        console.log('he angry');
        enemy.style.display="inline";
        soundEnemy.play();
    },3000);
}