const max = prompt("Enter the maximum numbers");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number (between [0 to max number])");

while(true){
    if((guess == "quit" && guess == "Quit")){
        guess=prompt("User Quit the game.");
        break;
    }


    if(guess<random){
        guess=prompt("Hint: Your guess is too small.");
    }
    else if (guess>random){
        guess=prompt("Hint: Your guess is too large ");
    }
    else if(guess==random){
        console.log("CONGRATS! YOUR GUESS IS RIGHT!! Number was ",random);
        break;
    }
}