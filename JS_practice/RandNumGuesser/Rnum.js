const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min +1))+min;

let attempts = 0;
const UseGuess  = document.getElementById("userGuess");
let submisison = document.getElementById("answerBtn");
let result = document.getElementById("result");



    submisison.onclick = function(){
        let guess = Number(UseGuess.value);
        if(isNaN(guess))
        {
            result.textContent = ("please enter a valid guess!");
        }
        else if(guess < min || guess>max)
        {
            result.textContent = ("guess is out of range. please pick a valid number");
        }
        else
        {
            attempts++;
            if(guess < answer)
            {
                result.textContent = ("TOO LOW BOZO (>o<) !!");
            }
            else if(guess ==answer)
            {
                result.textContent = (`YOU GOT IT DUDE (>U<) <3 !!!!!\n\n The answer was ${answer}! \n It took you ${attempts} tries to guess it.`);
                submisison.disabled = true;
            }
            else
            {
                result.textContent = ("TOO HIGH CRZY GUY (>o<)!!");
            }
        }
    }
    //guess = text.Content(`Guess a number between ${min} - ${max}`);
    
    //running = false;
 