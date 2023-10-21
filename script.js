
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const diceRoll = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const diceImg = document.querySelector('.dice')
const currentScoreOne = document.querySelector('#current--0');
const currentScoreTwo = document.querySelector('#current--1')
const activePlayer = document.querySelector('.player--active')

const score = [0, 0]
let currentScore = 0;
let activePlayerScore = 0;

let playing = true;

diceRoll.addEventListener('click', (event) => {

    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceImg.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayerScore}`).textContent = currentScore;


        } else {
            currentScore = 0;
            currentScoreOne.textContent = 0;
            currentScoreTwo.textContent = currentScore;
            playerOne.classList.toggle('player--active');
            playerTwo.classList.toggle('player--active');
            activePlayerScore = activePlayerScore === 0 ? 1 : 0;
        }
    }
})

holdBtn.addEventListener('click', (event) => {

    if (playing) {

        score[activePlayerScore] += currentScore
        document.querySelector(`#score--${activePlayerScore}`).textContent = score[activePlayerScore]

        if (score[activePlayerScore] >= 20) {
            playing = false;
            diceImg.classList.add('hidden')
            document.querySelector(`.player--${activePlayerScore}`).classList.add('player--winner');
            document.querySelector(`..player--${activePlayerScore}`).classList.remove('player--active')

        } else {
            currentScore = 0;
            currentScoreOne.textContent = 0;
            currentScoreTwo.textContent = currentScore;
            playerOne.classList.toggle('player--active');
            playerTwo.classList.toggle('player--active');
            activePlayerScore = activePlayerScore === 0 ? 1 : 0;
        }
    }
})
