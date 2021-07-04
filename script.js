'use strict';

let number = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }


    else if(guess === number){
        document.querySelector('.number').textContent = number;

        document.querySelector('.message').textContent = 'Correct!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }


    else if (guess > number){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;}
        else{
            document.querySelector('.message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if ( guess < number){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;}
        else{
            document.querySelector('.message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.message').textContent = 'Start guessing...';
});