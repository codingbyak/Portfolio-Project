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
        deck.push(cardFaces[j] + ' of ' + cardSuits[i])
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

//PLAYER AND DEALER SUMS

    playerSum = sumPlayerHand()
    dealerSum = sumDealerHand()
        if (playerValues.includes(1) && playerSum < 12) {
            playerSum += 10
        }
        if (dealerValues.includes(1) && dealerSum < 12) {
            dealerSum += 10
        }

//UPDATE PLAYER STATUS

    if (playerSum < 22) {
        isAlive = true
    } else {
        isAlive = false
    }

    if (playerSum === 21) {
        hasBlackjack = true
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

        playerSum = sumPlayerHand()
        if (playerValues.includes(1) && playerSum < 12) {
            playerSum += 10
        }

    } else {
        console.log('you went over 21!')
    }
    if (playerSum < 22) {
        isAlive = true
    } else {
        isAlive = false
    }
}

function stay() {
    if (isAlive === true && hasBlackjack === false) {
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
            dealerSum = sumDealerHand()
        }
        
    }
}