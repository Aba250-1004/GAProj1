var colors = ["yellow","blue","red","green"];
var currentRound = 1;

const getRandomValue = (array) => {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
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
    for(randomDiv of randomDivs){
        console.log(randomDiv.classList)
        randomDiv.classList.add("bright");
        console.log(randomDiv.classList);
        setTimeout(() => {

        }, 10000);
        randomDiv.setAttribute("class","panel");

    }
    currentRound++;
}

aRound();

