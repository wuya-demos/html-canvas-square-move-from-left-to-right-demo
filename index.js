const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();

let x = 20;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSquare() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, 20, 100, 100);
}

drawSquare();

setInterval(function () {
    x += 1;
    clearCanvas();
    drawSquare();
}, 20);