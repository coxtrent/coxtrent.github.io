document.addEventListener('DOMContentLoaded', () => {
    const bgm = document.getElementById('bgm');
    bgm.volume = 0.5; // Set the volume to 50%
});


const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

resultPic = document.getElementById('result-pic');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Tie!';
        sound = 'tie-sound';
        resultPic.src = 'khaby-really.gif';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'W';
        resultPic.src = 'W.webp';
        sound = 'win-sound';
    } else {
        result = 'L';
        resultPic.src = 'L.png';
        sound = 'lose-sound';
    }

    resultDiv.textContent = `You choose ${playerChoice}, CPU chooses ${computerChoice}.\n${result}`;
    const playThisSound = document.getElementById(sound).cloneNode();
    if(sound === 'tie-sound'){
        playThisSound.volume = 0.5;
    }
    playThisSound.play();
}

document.body.addEventListener('click', function() {
    const bgm = document.getElementById('bgm').play();
});