var colors = ["yellow","blue","red","green"];
var currentRound = 1;

const getRandomValue = (array) => {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const lightUp = (divPanelClass) => {
    console.log("light up");
    divPanelClass.add("bright");

}


const lightDown = (divPanelClass) => {
    console.log("light down");
    divPanelClass.remove("bright");
}


const aRound = () => {
    var randomColors = [];
    for(var i = 0; i < currentRound + 1; i++){
        randomColors.push(getRandomValue(colors));
    }
    randomDivs = [];
    for(var j = 0; j < randomColors.length; j++){
        randomDivs.push(document.querySelector("#"+randomColors[j]));
    }
    console.log(randomDivs)

    for(var i = 0; i < randomDivs.length; i++){
        console.log("enter loop")
        currClasslist = randomDivs[i].classList;
        console.log(randomDivs[i]);
        setTimeout(() => {
            lightUp(currClasslist);
        },(1000 + (i * 2000)))
        setTimeout(() => {
            lightDown(currClasslist);
        },(1500 + (i * 2000)))
        
        
    }
}

aRound();

