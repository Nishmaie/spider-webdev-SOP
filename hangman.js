var sports = [
    "volleyball", "basketball", "tabletennis", "throwball", "khokho", "badminton", "running", "tennis", "carom"
]
let answer = '';
let maxwrong = 6;
let wrong = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = sports[Math.floor(Math.random() * sports.length)];

}
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
           class="alphabets"
           id='`+ letter + `'
           onClick="Guess('`+ letter + `')"
        >
         `+ letter + `
         </button>
        `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function Guess(chosen) {
    guessed.indexOf(chosen) === -1 ? guessed.push(chosen) : null;
    document.getElementById(chosen).setAttribute('disabled', true);

    if (answer.indexOf(chosen) >= 0) {
        guessedWord();
        won();
    }
    else if (answer.indexOf(chosen) === -1) {
        wrong++;
        updateWrong();
        lost();
        updateImage();
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
function updateWrong() {
    document.getElementById('wrong').innerHTML = wrong;
}
function won() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = "YOU WON !";
    }
}
function lost() {
    if (wrong === maxwrong) {
        document.getElementById('wordSpotlight').innerHTML = "Correct answer is : " + answer;
        document.getElementById('keyboard').innerHTML = "YOU LOST.";

    }
}
function reset() {
    wrong = 0;
    guessed = [];
    document.getElementById('h1').src = "./images/h1.png";
    randomWord();
    guessedWord();
    updateWrong();
    generateButtons();
    updateImage();
}
function updateImage() {
    document.getElementById('h1').src = './images/h' + wrong + '.png';
}
document.getElementById('maxwrong').innerHTML = maxwrong;
randomWord();
generateButtons();
guessedWord();
Guess();