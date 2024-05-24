score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
},1000);
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode==38){
        micheal = document.querySelector('.micheal');
        micheal.classList.add('animateMicheal');
        setTimeout(() => {
            micheal.classList.remove('animateMicheal');
        }, 700);
    }
    if(e.keyCode==39){
        micheal = document.querySelector('.micheal');
        michealX = parseInt(window.getComputedStyle(micheal, null).getPropertyValue('left'));
        micheal.style.left = michealX + 112 + 'px';
    }
    if(e.keyCode==37){
        micheal = document.querySelector('.micheal');
        michealX = parseInt(window.getComputedStyle(micheal, null).getPropertyValue('left'));
        micheal.style.left = (michealX - 112) + 'px';
    }
}

setInterval(() => {
    micheal = document.querySelector('.micheal');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(micheal, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(micheal, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX < 120 && offsetY < 50){
        gameOver.innerHTML = 'Game Over - Play Again';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() =>{
            audio.pause();
            audiogo.pause();
    },1000);
}
    else if(offsetX<75 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {

        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.2;
        obstacle.style.animationDuration = newDur +'s';
        },500);

    }

}, 100)

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}