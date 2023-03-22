let playerCards = document.getElementById('playerCards')
let dealerCards = document.getElementById('dealerCards')
let playerSumEl = document.getElementById('playerSum')
let dealerSumEl = document.getElementById('dealerSum')
let resultsEl = document.getElementById('resultsEl')
let cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let cardFaces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
let deck = [];
let playerSum = 0;
let dealerSum = 0;
let isAlive = false;
let hasBlackjack = false;
let playerHand = [];
let dealerHand = [];
let playerValues = [];
let dealerValues = [];

for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < cardFaces.length; j++) {
        deck.push(cardFaces[j] + '_' + cardSuits[i])
    }
}

function randomIndex() {
    return Math.floor(Math.random() * 52)
}

function getValue(card) {
    if (card.includes('2')) {
        return 2
    } else if (card.includes('3')) {
        return 3
    } else if (card.includes('4')) {
        return 4
    } else if (card.includes('5')) {
        return 5
    } else if (card.includes('6')) {
        return 6
    } else if (card.includes('7')) {
        return 7
    } else if (card.includes('8')) {
        return 8
    } else if (card.includes('9')) {
        return 9
    } else if (card.includes('10') || card.includes('Jack') || card.includes('Queen') || card.includes('King')) {
        return 10
    } else {
        return 1
    }
}

function getSum(arr) {
    let sum = 0
    for (let m = 0; m < arr.length; m++) {
        if (arr[m] === 1 && sum < 12) {
            return sum = sum + 10;
        }
        return sum = sum + arr[m];
    }
}

function sumPlayerHand() {
    return playerValues.reduce((x, y) => x + y, 0);
}

function sumDealerHand() {
    return dealerValues.reduce((x, y) => x + y, 0);
}

function deal() {
    isAlive = true;
// RANDOMIZING CARDS

    let playerCardOne = deck[randomIndex()]
    let playerCardTwo = deck[randomIndex()]
    let dealerCardOne = deck[randomIndex()]
    let dealerCardTwo = deck[randomIndex()]

// CHECK FOR DUPLICATES - NO DUPLICATES ALLOWED IN GAME

    while (playerCardTwo === playerCardOne) {
        playerCardTwo = deck[randomIndex()]
    }

    while (dealerCardOne === playerCardTwo || dealerCardOne === playerCardOne) {
        dealerCardOne = deck[randomIndex()]
    }

    while (dealerCardTwo === dealerCardOne || dealerCardTwo === playerCardTwo || dealerCardTwo === playerCardOne) {
        dealerCardTwo = deck[randomIndex()]
    }

//HAND AND VALUE ARRAYS FOR PLAYER AND DEALER
    playerHand.push(playerCardOne)
    playerHand.push(playerCardTwo)
    dealerHand.push(dealerCardOne)
    dealerHand.push(dealerCardTwo)
    playerValues.push(getValue(playerCardOne))
    playerValues.push(getValue(playerCardTwo))
    dealerValues.push(getValue(dealerCardOne))
    dealerValues.push(getValue(dealerCardTwo))

    playerCards.innerHTML += `<img src="./images/${playerCardOne}.jpg"/>`
    playerCards.innerHTML += `<img src="./images/${playerCardTwo}.jpg"/>`
    dealerCards.innerHTML += `<img src="./images/${dealerCardOne}.jpg"/>`
    dealerCards.innerHTML += `<div></div>`

    playerSum = sumPlayerHand()
    dealerSum = sumDealerHand()
        if (playerValues.includes(1) && playerSum < 12) {
            playerSum += 10
        }
        if (dealerValues.includes(1) && dealerSum < 12) {
            dealerSum += 10
        }
    playerSumEl.textContent = 'Player: ' + playerSum
    dealerSumEl.textContent = 'Dealer: ' + getValue(dealerCardOne) 

//UPDATE PLAYER STATUS
    if (playerSum > 21) {
        isAlive = false;
    }
    if (playerSum === 21) {
        hasBlackjack = true;
    }
    if (dealerSum === 21 && hasBlackjack === false) {
        resultsEl.textContent = "Dealer has BlackJack..."
        dealerCards.innerHTML = ""
        dealerCards.innerHTML = `<img src="./images/${dealerCardOne}.jpg"/>`
        dealerCards.innerHTML = `<img src="./images/${dealerCardTwo}.jpg"/>`
        dealerSumEl.textContent = 'Dealer: ' + dealerSum 
    }

    if (hasBlackjack === true & dealerSum !== 21) {
        resultsEl.textContent = "BlackJack!"
    }
}

function hit() {
    if (isAlive === true & hasBlackjack === false) {
        let newCard = deck[randomIndex()]
        for (let x = 0; x < dealerHand.length; x++) {
            for (let y = 0; y < playerHand.length; y++) {
                while (newCard === playerHand[y] || newCard === dealerHand[x]) {
                    newCard === deck[randomIndex()]
                }
            }
        }

        playerHand.push(newCard)
        playerValues.push(getValue(newCard))   
        playerCards.innerHTML += `<img src="./images/${newCard}.jpg"/>`

        playerSum = sumPlayerHand()
        if (playerValues.includes(1) && playerSum < 12) {
            playerSum += 10
        }
        playerSumEl.textContent = 'Player: ' + playerSum
        if (playerSum > 21) {
            isAlive = false;
            stay()
        }
        if (playerSum === 21) {
            stay()
        }
    }
}

function stay() {
    dealerCards.innerHTML = ""
    dealerCards.innerHTML += `<img src="./images/${dealerHand[0]}.jpg"/>`
    dealerCards.innerHTML += `<img src="./images/${dealerHand[1]}.jpg"/>`

    if (isAlive === true) {
        while (dealerSum < 17) {
            let newDealerCard = deck[randomIndex()]
            for (let x = 0; x < dealerHand.length; x++) {
                for (let y = 0; y < playerHand.length; y++) {
                    while (newDealerCard === playerHand[y] || newDealerCard === dealerHand[x]) {
                        newDealerCard === deck[randomIndex()]
                    }
                }
            }
            dealerHand.push(newDealerCard)
            dealerValues.push(getValue(newDealerCard))
            dealerCards.innerHTML += `<img src="./images/${newDealerCard}.jpg"/>`
            dealerSum = sumDealerHand()
        }
        
    }
    if (dealerSum > 21 && isAlive === true) {
        resultsEl.textContent = "Dealer Busts!"
    } else if (playerSum > dealerSum && isAlive === true) {
        resultsEl.textContent = "You Win!"
    } else if (hasBlackjack === true && dealerSum !== 21) {
        resultsEl.textContent = "Blackjack!"
    } else if (playerSum === dealerSum) {
        resultsEl.textContent = "Draw!"
    } else {
        resultsEl.textContent = "Dealer Wins"
    }
    dealerSumEl.textContent = 'Dealer: ' + dealerSum
}

function reset() {
    isAlive = false;
    hasBlackjack = false;
    playerSum = 0;
    dealerSum = 0;
    playerHand = [];
    dealerHand = [];
    playerValues = [];
    dealerValues = [];
    dealerSumEl.textContent = "Dealer: " + dealerSum
    playerSumEl.textContent = "Player: " + playerSum
    resultsEl.textContent = ""
    dealerCards.innerHTML = ""
    playerCards.innerHTML = ""
}