let brush = document.getElementById("c").getContext("2d")
let w = 400
let h = 400
let size = 20
let snake = [[0, 0], [1, 0], [2, 0], [3, 0]]

document.addEventListener("keydown", onkeydown)

setInterval(drawFrame, 200)

function onkeydown(e) {
    if (e.key === "ArrowLeft") {
        
    } else if (e.key === "ArrowRight") {

    } else if (e.key === "ArrowUp") {
        
    } else if (e.key === "ArrowDown") {
        
    } else if (e.key === "Enter") {
        setInterval(drawFrame, 200)
    }
}

function drawFrame() {
    drawBackground()
    drawSnake()
}

function drawSnake() {
    brush.fillStyle = "#FF0000"
    for (let i = 0; i < snake.length; ++i){
        let x = snake[i][0] * size
        let y = snake[i][1] * size
        brush.fillRect(x, y, size, size)
    }
}

function drawBackground() {
    brush.fillStyle = "#5555FF"
    brush.fillRect(0, 0, w, 3/4*h)
    brush.fillStyle = "#00FF00"
    brush.fillRect(0, 3/4*h, w, 1/4*h)
}