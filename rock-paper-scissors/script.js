
const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
tieSound = document.getElementById('tie-sound');
tieSound.volume = 0.5; // Set the volume to 50%
bgm = document.getElementById('bgm');
const evilBgm = document.getElementById('evil-bgm');
evilBgm.volume = 0.5; // Set the volume to 50%

bgm.volume = 0.5; // Set the volume to 50%

bgm.play().catch(error => {
    console.log('Autoplay was prevented:', error);
});

document.getElementById('play-bgm').addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play();
        evilBgm.pause();
    }
});

document.getElementById('play-evil-bgm').addEventListener('click', () => {
    if (evilBgm.paused) {
        evilBgm.play();
        bgm.pause();
    }
});

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

resultPic = document.getElementById('result-pic');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
        sound = 'tie-sound';
        resultPic.src = 'khaby-really.gif';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        resultPic.src = 'W.webp';
        sound = 'win-sound';
    } else {
        result = 'You lose!';
        resultPic.src = 'L.png';
        sound = 'lose-sound';
    }

    resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    const playThisSound = document.getElementById(sound).cloneNode();
    playThisSound.play();
}