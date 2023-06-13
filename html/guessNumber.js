console.log("test");
var randomNumber = Math.trunc(Math.random()*20)+1;

var score = 20;
document.querySelector(".guess-score").innerHTML = score;
document.querySelector(".guess-status-msg").innerHTML = "Start Guessing";

console.log("random number " + randomNumber)
console.log("score number " + score)


function checkNumFun(){
    var guessnum = Number(document.querySelector(".guess-input").value);
    console.log(guessnum, typeof guessnum);
    //  while(guessnum === randomNumber){
    //      document.querySelector(".guess-score").innerHTML = "win";
    //  }

        if(guessnum === randomNumber){
            console.log("done");
            document.querySelector(".bgLight").style.backgroundColor = "#55ff5512";
            document.querySelector(".guess-status-msg").innerHTML = "Correct Number";
            document.querySelector(".guess-status-msg").style.color = "#1bad1b";
            score--;
            document.querySelector(".guess-score").innerHTML = score;
            document.querySelector(".guess-success-number").innerHTML = randomNumber;

        }
        else if(guessnum > randomNumber){
            if(score>1){
                console.log("guessed high");
                document.querySelector(".bgLight").style.backgroundColor = "#ff555512";
                document.querySelector(".guess-status-msg").innerHTML = "guessed high";
                score--;
                document.querySelector(".guess-score").innerHTML = score;
            }else{
                document.querySelector(".guess-status-msg").innerHTML = "You loss the game";
                document.querySelector(".guess-score").innerHTML = '';
            }
            
        }
        else{
            if(score>1){
                console.log("guessed low");
                document.querySelector(".bgLight").style.backgroundColor = "#ff555512";
                document.querySelector(".guess-status-msg").innerHTML = "guessed low";
                score--;
                document.querySelector(".guess-score").innerHTML = score;
            }else{
                document.querySelector(".guess-status-msg").innerHTML = "You loss the game";
                document.querySelector(".guess-score").innerHTML = '';
            }
           
        }
    
}

document.querySelector('.again-btn').addEventListener('click', function(){
    document.querySelector(".guess-input").value = ''
    document.querySelector(".guess-score").innerHTML = 20;
    document.querySelector(".guess-status-msg").innerHTML = "Start Guessing";
    document.querySelector(".guess-success-number").innerHTML = "?";
    randomNumber = Math.trunc(Math.random()*20)+1;
    console.log("random number 2 = " + randomNumber)
    document.querySelector(".bgLight").style.backgroundColor = "#ffffff";
    document.querySelector(".guess-status-msg").style.color = "#222222";
})