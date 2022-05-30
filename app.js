const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // console.log(userChoice);
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
    
    switch (randomNumber) {
        case 1:
            computerChoiceDisplay.innerHTML = 'rock';
            break;
        case 2:
            computerChoiceDisplay.innerHTML = 'paper';
            break;
        case 3:
            computerChoiceDisplay.innerHTML = 'scissors';
            break;
        default:
            break;
    }
    // console.log(computerChoice);
    compareChoices();
};

function compareChoices() {
    if (userChoice === computerChoiceDisplay.innerHTML) {
        resultDisplay.innerHTML = 'It\'s a draw !';
    } else if (userChoice === 'rock' && computerChoiceDisplay.innerHTML === 'scissors') {
        resultDisplay.innerHTML = 'You win ! Rock beats Scissors !';
    } else if (userChoice === 'rock' && computerChoiceDisplay.innerHTML === 'paper') {
        resultDisplay.innerHTML = 'You lose ! Paper beats Rock !';
    } else if (userChoice === 'paper' && computerChoiceDisplay.innerHTML === 'rock') {
        resultDisplay.innerHTML = 'You win ! Paper beats Rock !';
    } else if (userChoice === 'paper' && computerChoiceDisplay.innerHTML === 'scissors') {
        resultDisplay.innerHTML = 'You lose ! Scissors beats Paper !';
    } else if (userChoice === 'scissors' && computerChoiceDisplay.innerHTML === 'paper') {
        resultDisplay.innerHTML = 'You win ! Scissors beats Paper !';
    } else if (userChoice === 'scissors' && computerChoiceDisplay.innerHTML === 'rock') {
        resultDisplay.innerHTML = 'You lose ! Rock beats Scissors !';
    }
};