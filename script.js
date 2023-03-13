let firstPart = ''
let secondPart = ''
let thirdPart = ''

function firstPartGenerator() {
    firstPart = Math.floor(Math.random() * 3)
    switch (firstPart) {
        case 0:
            firstPart = 'Hello there! ';
            break;
        case 1:
            firstPart = 'Howdy! ';
            break;
        case 2:
            firstPart = 'Ahoy! '
    }
}

function secondPartGenerator() {
    secondPart = Math.floor(Math.random() * 3)
    switch (secondPart) {
        case 0:
            secondPart = 'Just here to remind you, ';
            break;
        case 1:
            secondPart = 'Look here partner, ';
            break;
        case 2:
            secondPart = 'Matey, I have to say, ';
    }
}

function thirdPartGenerator() {
    thirdPart = Math.floor(Math.random() * 3)
    switch (thirdPart) {
        case 0:
            thirdPart = 'you can accomplish anything you set your mind to!';
            break;
        case 1:
            thirdPart = 'shoot for the moon! You can do it!';
            break;
        case 2:
            thirdPart = 'push through the storm, clear skies ahead!';
    }
}

function secretMessageGenerator() {
    firstPartGenerator()
    secondPartGenerator()
    thirdPartGenerator()
    console.log(firstPart + secondPart + thirdPart)
}

secretMessageGenerator()


