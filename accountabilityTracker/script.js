let counter = 0
let counterDisplay = document.getElementById('counter')
counterDisplay.textContent = counter

function update() {
    counterDisplay.textContent = counter
}


function plus1() {
    counter++
    update()
}

function plus3() {
    counter = counter + 3
    update()
}

function plus5() {
    counter = counter + 5
    update()
}

function minus2() {
    counter = counter - 2
    update()
}

function minus10() {
    counter = counter - 10
    update()
}

function ounce() {
    counter = counter - 200
    update()
}