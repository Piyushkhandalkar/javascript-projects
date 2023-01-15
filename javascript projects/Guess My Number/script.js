'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '___';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 45;

document.querySelector('.guess').value = 20;
*/

let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    highscore = 0;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

})

document.querySelector('.check').addEventListener
    ('click', function () {

        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            console.log(null);
        } else if (guess === number) {
            document.querySelector('.message').textContent = 'CORRECT ANSWER';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = number;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess > number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too high';
                document.querySelector('.score').textContent = --score;
            } else {
                document.querySelector('.message').textContent = 'you lost';
            }
        } else if (guess < number) {
            if (guess > 0) {
                document.querySelector('.message').textContent = 'too low';
                document.querySelector('.score').textContent = --score;
            } else {
                document.querySelector('.message').textContent = 'you lost';
            }
        }

    })