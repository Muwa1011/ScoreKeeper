const newGameButton = document.querySelector("#newGameButton")
const startButton = document.querySelector("#startButton")
const points = document.querySelector("#points")

const scoreButtonOne = document.querySelector("#scoreButtonOne");
const scoreButtonTwo = document.querySelector("#scoreButtonTwo");

const scorePlayerOne = document.querySelector("#scorePlayerOne")
const scorePlayerTwo = document.querySelector("#scorePlayerTwo")

let scoreOne = 0;
let scoreTwo = 0;
let finalScore = 0;

let playing = false

newGameButton.addEventListener('click', function (e) {
    on();
})

startButton.addEventListener('click', function (e) {
    off()
    finalScore = points.value
    scoreOne = 0;
    scoreTwo = 0;
    scorePlayerOne.innerText = scoreOne;
    scorePlayerTwo.innerText = scoreTwo;
    playing = true;
    scorePlayerOne.style.color = "White";
    scorePlayerTwo.style.color = "White";
})

scoreButtonOne.addEventListener('click', function (e) {
    if (playing) {
        scoreOne++;
        scorePlayerOne.innerText = scoreOne;
        console.log(`scoreOne: ${scoreOne} / finalScore: ${finalScore}`)
        if (scoreOne >= finalScore) {
            scorePlayerOne.style.color = "#0081a7";
            scorePlayerTwo.style.color = "#f07167";
            playing = false;
        }
    }
})

scoreButtonTwo.addEventListener('click', function (e) {
    if (playing) {
        scoreTwo++;
        scorePlayerTwo.innerText = scoreTwo;
        if (scoreTwo >= finalScore) {
            scorePlayerTwo.style.color = "#0081a7";
            scorePlayerOne.style.color = "#f07167";
            playing = false;
        }
    }
})


function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
} 