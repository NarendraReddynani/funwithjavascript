let min=1;
let max=100;
let attempts=0;
let guess;
let running=true;
const answer=Math.floor(Math.random()*(max-min+1))+min;

while(running){
    guess=window.prompt(`guess a number betweeen ${min}- ${max}`);
    guess=Number(guess);

    if(guess<min || guess>max){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("number is too low");
        }
        else if(guess>answer){
            window.alert("number is too high");
        }
        else{
           
            window.alert("correct!you guessed it");
            running=false;
        }
    }
}