let colors = ["yellow","blue","red","green"];
let currentRound = 1;
let isCountDone = false;
let userClicks = [];


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

const flash = (currClasslist) => {
    setTimeout(() => {
        lightUp(currClasslist);
    },(1000 + (i * 2000)))
    setTimeout(() => {
        lightDown(currClasslist);
    },(1500 + (i * 2000)))
}


async function countDown (randomDivs) {
    let h1 = document.querySelector("h1");
    let userClicks = [];
    let divs = document.querySelectorAll(".panel");
    let allowClick = document.querySelector("#allowClick")
    
    seconds = 10 + 5*(currentRound - 1) + 1.5*(currentRound+1); 
    setInterval(function() {
    //console.log(seconds);
    h1.innerHTML= seconds;
  
    // If the count down is finished, write some text
    if (seconds === (10 + 5*(currentRound - 1))){ 
        allowClick.innerHTML = "Go Go Go"
        for(div of divs){
            div.addEventListener("click",(event)=> {
                userClicks.push(event.target);
            })
        }
        seconds -= .25;
    }else if (seconds <= 0) {
      allowClick.innerHTML = "No Clicks"
      clearInterval(countDown);
      // remove click listeners
      for(div of divs){
        div.removeEventListener("click",() => {

        });
      }
      console.log(userClicks,randomDivs)

      return compareTo(userClicks,randomDivs);
    }else{
        seconds-=.25;
    }
  }, 250);
}

function compareTo (userInput,computerInput) {
    if (userInput.length === computerInput.length){
        for(let i = 0; i < userInput.length; i++){
            if(userInput[i] !== computerInput[i]){
                console.log("false0")
                return false;
            }
        }
        console.log("true")
        return true;
    }else{
        console.log("false1")
        return false;
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
    console.log(randomDivs)
    for(i = 0; i < randomDivs.length; i++){
        currClasslist = randomDivs[i].classList;
        flash(currClasslist);
    }
    let userMatch = await countDown(randomDivs); 
    console.log("here")
    console.log(userMatch)


    
    
    

    
}

let game = aRound();
//console.log(game);

