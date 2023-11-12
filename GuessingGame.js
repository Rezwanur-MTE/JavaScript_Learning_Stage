
var numofWon=0;
var numofLost=0;

for(var i=0; i<5; i++){

    var guessNumber=parseInt(prompt(" Enter a number from 1 to 5: "));
var randomNumber = Math.floor(Math.random()*5)+1; // this will generate random number in 1 to 5

    if(guessNumber==randomNumber){
       document.write("</br> WOW! you Won ");
       numofWon++;
    }
    else {
        document.write("</br> Ohho! you lost . Random number was "+randomNumber);
        numofLost++;
    }
}

document.write("</br> You own "+ numofWon+" times");
document.write("</br> You lost "+ numofLost+" times");
