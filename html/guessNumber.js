console.log("test");
const randomNumber = Math.round(Math.random(100)*20);
var score = 20;
document.querySelector(".guess-success-number").innerHTML = randomNumber;

console.log("random number " + randomNumber)
console.log("score number " + score)


function checkNumFun(){
    const guessnum = document.querySelector(".guess-input").value;
    console.log(guessnum, typeof guessnum);
     while(guessnum === randomNumber){
         document.querySelector(".guess-score").innerHTML = "win";
     }


    
        if(guessnum == randomNumber){
            console.log("done");
            document.querySelector(".bgLight").style.backgroundColor = "#55ff5512";
            document.querySelector(".guess-status-msg").innerHTML = "Correct Number";
            document.querySelector(".guess-status-msg").style.color = "#1bad1b";
            score--;
            document.querySelector(".guess-score").innerHTML = score;

        }
        else if(guessnum > randomNumber){
            console.log("guessed high");
            document.querySelector(".bgLight").style.backgroundColor = "#ff555512";
            document.querySelector(".guess-status-msg").innerHTML = "guessed high";
            score--;
            document.querySelector(".guess-score").innerHTML = score;
        }
        else{
            console.log("guessed low");
            document.querySelector(".bgLight").style.backgroundColor = "#ff555512";
            document.querySelector(".guess-status-msg").innerHTML = "guessed low";
            score--;
            document.querySelector(".guess-score").innerHTML = score;
        }
    
}