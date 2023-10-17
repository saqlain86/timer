let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
        isRunning = false;
    } else {
        timer = setInterval(updateTimer, 1000);
        startStopButton.textContent = "Stop";
        isRunning = true;
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(timer);
    startStopButton.textContent = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = "00:00:00";
});

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
