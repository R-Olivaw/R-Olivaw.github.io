// let maximum = parseInt(prompt("Enter your maximum number."));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number you coniving son of a bitch!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess."));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++
//     if (guess > targetNum) {
//         guess = prompt("Too high! Haha!");
//     } else {
//         guess = prompt("Too low! Boo Hoo!")
//     }
// }
// if (guess === 'q') {
//     console.log("QUITTER! BOO!")
// } else {
//     console.log("WOW CONGRATS BIG BOY!")
//     console.log(`You got it! It took you ${attempts} guesses! WOW!`)
// }

// ----------------------------------------------------------------------------------

// let input = prompt('What would you like to do?');
// const todos = ['Brush Teeth', 'Buy Chicken'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*************')
//         for(let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*************')
//     } else if (input === 'new') {
//         let newItem = prompt('What do you want to add?');
//         todos.push(newItem)
//         console.log(`Added ${newItem} to list!`)
//     } else if (input === 'delete') {
//         let itemToDelete = parseInt(prompt('Which item do you want to delete?'));
//         if(!Number.isNaN(itemToDelete)) {
//             let removed = todos.splice(itemToDelete, 1);
//             console.log(`Removed ${removed} from list!`);
//         } else {
//             console.log('Unknown item! Unknown item!')
//         }
//     }
//     input = prompt('What would you like to do?')
// }
// console.log("Exiting...")

// ----------------------------------------------------------------------------------