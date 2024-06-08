// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.


// 1. Set a maximum value
const maxValue = 100;

// 2. Generate a random number
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random number (for development purposes): ${randomNumber}`);

// 3. Track the guess status
let isCorrectGuess = false;

// 4. Simulate user guesses
const predefinedGuesses = [23, 45, 78, 56, 89, 10, 100, 32, 64, 42];

// 5. Iterate over guesses
let index = 0;
while (!isCorrectGuess && index < predefinedGuesses.length) {
    const currentGuess = predefinedGuesses[index];

    // 6. Check the user's guess
    if (currentGuess === randomNumber) {
        console.log(`Correct guess! The number was ${randomNumber}.`);
        isCorrectGuess = true;
    } else if (currentGuess > randomNumber) {
        console.log(`${currentGuess} is too high.`);
    } else {
        console.log(`${currentGuess} is too low.`);
    }

    index++;
}

if (!isCorrectGuess) {
    console.log(`None of the guesses were correct. The number was ${randomNumber}.`);
}
