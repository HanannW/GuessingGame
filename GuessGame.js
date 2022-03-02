// Practicing while loops //

// (Ask a user ot enter a mamimu number a save to a variable)
//answer needs to be converted into a number using parseInt
let maximum = parseInt(prompt ('Enter a maximum number'));
while (!maximum){
    maximum = parseInt(prompt('Enter a valid number!')); // loops ensures we get a valid number and not a NaN

}

const targetNum = Math.floor(Math.random() * maximum) + 1; // generating a number from 1 to maximum ,from 0-1 as a decimal, multiply by 10, chop of the decimal, then we add 1
//Save that into a variable as const targetNum
let attempts =1; //Keeping a count on the number of attempts 

//ask to enter a guess
let guess=parseInt(prompt ('Enter your first guess'));

while (parseInt(guess) !== targetNum) {
    if (guess ==='q') break; //ability to quit if you pass in a very large number, so we parse in after getting and input and when comparing
    attempts ++;
    if(guess > targetNum){
        guess= prompt('Too High, enter a a new number')
    }
    else {
        guess= prompt ('Too Low, enter a new number');
    }
     
} 
if (guess=== 'q'){
    console.log ('Ok, you quit')
}
else {
    
    console.log(`Correct guess! It took you ${attempts} guesses`)
}
