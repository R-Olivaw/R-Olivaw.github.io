let maximum = parseInt(prompt("Enter your maximum number."));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number you coniving son of a bitch!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess."));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++
    if (guess > targetNum) {
        guess = prompt("Too high! Haha!");
    } else {
        guess = prompt("Too low! Boo Hoo!")
    }
}
if (guess === 'q') {
    console.log("QUITTER! BOO!")
} else {
    console.log("WOW CONGRATS BIG BOY!")
    console.log(`You got it! It took you ${attempts} guesses! WOW!`)
}