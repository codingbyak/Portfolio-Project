let resultsEl = document.getElementById('results');
let countDown = document.getElementById('countdown');
let playerEl = document.getElementById('player-choice');
let compEl = document.getElementById('comp-choice');
let playerChoice = document.getElementsByClassName('player-choice');
let compChoice = document.getElementsByClassName('comp-choice');
let player = document.getElementsByClassName('player');
let computer = document.getElementsByClassName('computer');
let computerHand = ''

function shoot() {
    playerEl.className += "player-choice";
    compEl.className += "comp-choice";

    setTimeout(function() {
        playerEl.className = "";
        compEl.className = "";
    }, 4005)
    }


function randomizeHand() {
    let hand = Math.floor(Math.random()*3)
    switch (hand) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    computerHand = hand
}

function countdown() {
    resultsEl.textContent = ''
    setTimeout(function() {
        countDown.textContent = 'ROCK!'
    }, 0)

    setTimeout(function() {
        countDown.textContent = 'PAPER!'
    }, 1500)

    setTimeout(function() {
        countDown.textContent = 'SCISSORS!'
    }, 2600)

    setTimeout(function() {
        countDown.textContent = 'SHOOT!'
    }, 3700)
}

function rock() {
    playerEl.src = "./images/rps-rock.jpg";
    compEl.src = "./images/comp-rock.jpg";
    shoot()
    countdown()
    setTimeout(function() {
    computerHand = randomizeHand()
    if (computerHand === 'rock') {
        playerEl.src="./images/rps-rock.jpg"
        compEl.src="./images/comp-rock.jpg"
        resultsEl.textContent = 'Computer throws rock. It was a tie!'
    } else if (computerHand === 'paper') {
        playerEl.src="./images/rps-rock.jpg"
        compEl.src="./images/comp-paper.jpg"
        resultsEl.textContent = 'Computer throws paper. You lose!'
    } else if (computerHand === 'scissors') {
        playerEl.src="./images/rps-rock.jpg"
        compEl.src="./images/comp-scissors.jpg"
        resultsEl.textContent = 'Computer throws scissors. You won!'
    } else {
        resultsEl.textContent = 'ERROR!'
    }
}, 3700)
}

function paper() {
    playerEl.src = "./images/rps-rock.jpg";
    compEl.src = "./images/comp-rock.jpg";
    resultsEl.textContent = ''
    shoot()
    countdown()
    setTimeout(function() {
    computerHand = randomizeHand()
    if (computerHand === 'rock') {
        playerEl.src="./images/rps-paper.jpg";
        compEl.src="./images/comp-rock.jpg";
        resultsEl.textContent = 'Computer throws rock. You won!'
    } else if (computerHand === 'paper') {
        playerEl.src="./images/rps-paper.jpg";
        compEl.src="./images/comp-paper.jpg"
        resultsEl.textContent = 'Computer throws paper. It was a tie!'
    } else if (computerHand === 'scissors') {
        playerEl.src="./images/rps-paper.jpg";
        compEl.src="./images/comp-scissors.jpg"
        resultsEl.textContent = 'Computer throws scissors. You lose!'
    } else {
        resultsEl.textContent = 'ERROR!'
    }
}, 3700)
}

function scissors() {
    playerEl.src = "./images/rps-rock.jpg";
    compEl.src = "./images/comp-rock.jpg";
    resultsEl.textContent = ''
    shoot()
    countdown()
    setTimeout(function() {
    computerHand = randomizeHand()
    if (computerHand === 'rock') {
        playerEl.src = "./images/rps-scissors.jpg"
        compEl.src = "./images/comp-rock.jpg"
        resultsEl.textContent = 'Computer throws rock. You lose!'
    } else if (computerHand === 'paper') {
        playerEl.src = "./images/rps-scissors.jpg"
        compEl.src="./images/comp-paper.jpg"
        resultsEl.textContent = 'Computer throws paper. You won!'
    } else if (computerHand === 'scissors') {
        playerEl.src = "./images/rps-scissors.jpg"
        compEl.src = "./images/comp-scissors.jpg"
        resultsEl.textContent = 'Computer throws scissors. It was a tie!'
    } else {
        resultsEl.textContent = 'ERROR!'
    }
}, 3700)
}

