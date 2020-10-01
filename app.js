let colors = ["yellow","blue","red","green"];
let currentRound = 1;
let userClicks = [];
let isReset = false;


function getRandomValue (array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function lightUp (divPanelClass) {
    divPanelClass.add("bright");
}


function lightDown (divPanelClass) {
    divPanelClass.remove("bright");
}

function flash (currClasslist) {
    setTimeout(() => {
        lightUp(currClasslist);
    },(1000 + (i * 2000)))
    setTimeout(() => {
        lightDown(currClasslist);
    },(1500 + (i * 2000)))
}

function quickFlash(currClasslist) {
    lightUp(currClasslist);
    setTimeout(() => {
        lightDown(currClasslist);
    },300)
}

function pushUserClicks(event){
    //console.log(event.target);
    userClicks.push(event.target);
    quickFlash(event.target.classList)
    //console.log(userClicks);
}

function resetClick(){
    //console.log("here")
    userClicks = [];
    seconds = 0;
    isReset = true;
}

async function countDown (randomDivs) {
    let h1 = document.querySelector("h1");
    let divs = document.querySelectorAll(".panel");
    let allowClick = document.querySelector("#allowClick")
    
    seconds = 10 + 2*(currentRound - 1) + 1.5*(currentRound+1); 
    let myInterval = setInterval(function() {
    //console.log(seconds);
    h1.innerHTML= seconds;
  
    // If the count down is finished, write some text
    if (seconds === (10 + 2*(currentRound - 1))){ 
        allowClick.innerHTML = "User Turn"
        //allowClick.style.color = "gold";
        allowClick.style.border = "3px solid gold";
        for(div of divs){
            div.addEventListener("click",pushUserClicks)
        }
        let resetButton = document.querySelector("#reset");
        resetButton.addEventListener("click",resetClick)
        seconds -= .25;
    }else if (seconds <= 0) {
      clearInterval(myInterval);
      allowClick.innerHTML = "CPU Turn"
      allowClick.style.color = "black";
      allowClick.style.border = "3px solid black";
      let resetButton = document.querySelector("#reset");
      resetButton.removeEventListener("click",resetClick)
      // remove click listeners
      for(div of divs){
          // this is not working fix it asap
        div.removeEventListener("click",pushUserClicks);
      }
      return compareTo(userClicks,randomDivs);
    }else{
        seconds-=.25;
        // submit button click
        let submitButton = document.querySelector("#submit")
        submitButton.addEventListener("click", () => {
            seconds = 0;
         })
    }
  }, 250);
}


function youLose(){
    let h2Round = document.querySelector("#rightV");
    h2Round.innerHTML = "<h2>You Lose!</h2>";
    h2Round.style.color = "white"
}
function compareTo (userInput,computerInput) {
    if (userInput.length === computerInput.length){
        for(let i = 0; i < userInput.length; i++){
            if(userInput[i] !== computerInput[i]){
                youLose();
                return gameOver();
            }
        }
        currentRound++;
        let h2Round = document.querySelector("#rightV");
        h2Round.innerHTML = "<h2>Round " + currentRound + "</h2>";
        userClicks = [];
        aRound();
    }else{
        if(isReset){
            currentRound = 1;
            let h2Round = document.querySelector("#rightV");
            h2Round.innerHTML = "<h2>Round " + currentRound + "</h2>";
            userClicks = [];
            isReset = false;
            aRound();
        }else{
            youLose();
            return gameOver();
        }
    }
}


async function aRound () {
    let randomColors = [];
    for(let i = 0; i < currentRound + 1; i++){
        randomColors.push(getRandomValue(colors));
    }
    let randomDivs = [];
    for(let j = 0; j < randomColors.length; j++){
        randomDivs.push(document.querySelector("#"+randomColors[j]));
    }
    //console.log(randomDivs)
    for(i = 0; i < randomDivs.length; i++){
        currClasslist = randomDivs[i].classList;
        flash(currClasslist);
    }
    let userMatch = await countDown(randomDivs); 
}

function gameOver () {
 
}

let game = aRound();
//console.log(game);

