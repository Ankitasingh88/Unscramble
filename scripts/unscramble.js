
const button = document.querySelector(".button");

button.onclick = () => {

    // Start the game
     startGame();
};

// Function to start the game
const startGame = () => {
    
    // Constants and word bank
    const words = ["JAVA", "SCRIPT", "PYTHON", "JAVASCRIPT", "CHANGE", "DATATYPE", "GAMES", "DATA", "PROGRAMER", "SOFTWARE","KOTLIN","CODING","LANGUAGE","FRONTENED","APPLICATION","DATABASE"];
    let playAgain = true;
    let continuePlaying = false;

    while (playAgain) {

        if (!continuePlaying) {
            const playStartResponse = confirm("Would you like to start playing ?");
            playAgain = playStartResponse;
       
            // Check if the user wants to continue playing
            if (!playAgain) {
                alert("Game cancelled");
                return; // Exit the game loop
            }
        }

        // Choose a random word from the word bank
        const randomIndex = Math.floor(Math.random() * words.length);
        const selectedWord = words[randomIndex];
        
        // Scramble the word
        const scrambledWord = scrambleWord(selectedWord);
        
        // Game state
        let attempts = 3; // Number of attempts allowed
        let userWon = false;
        
        while (attempts > 0 && !userWon) {
            // Prompt user for their guess
            const userGuess = prompt(`Unscramble the word: ${scrambledWord} \nAttempts left: ${attempts}`);
            
            // Check if user pressed Cancel
            if (userGuess === null) {
                alert("Game cancelled");
                return; // Exit the game loop
            }

            // Input validation by using Regex
            if (!userGuess.match(/^[A-Za-z]*$/i)) {
                alert("Invalid input. Please enter letters only.");
                continue; // Skip to the next iteration of the while loop
            }

            // Compare user guess to selected word
            if (userGuess.toUpperCase() === selectedWord) {
                alert("Congratulations! You unscrambled the word correctly!");
                userWon = true;
            } else {
                attempts--;
                if (attempts > 0) {
                  alert("Ohh No, Incorrect guess!! please Try again.");
                }
                
            }
         } 

        // Final message based on game outcome
        if (!userWon) {
          alert(`SORRY, YOU LOST! You've run out of attempts. The word was "${selectedWord}".`);
        }

        // Ask if user wants to play again
        const playAgainResponse = confirm("Would you like to continue playing ?");
        playAgain = playAgainResponse;
        if (playAgain) {
            continuePlaying = true;
        };
    }
    alert("Thanks for playing! Goodbye.");
}

// Function to scramble a word
const scrambleWord = (word) => {
    const wordArray = word.split(""); // Convert word to array of characters
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // Swap letters
    }
    return wordArray.join("");
  }


  