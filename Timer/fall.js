let brush = document.getElementById("c1").getContext("2d")

let w = 400 // width of canvas
let h = 400 // hieght of canvas
let size = 20 // size of square
let x = 200 - size/2 // x of square
let y = 0 // y of square
let dy = 5 // increase in y
let dx = 5 // increase in x
let jumpImpact = 20 // speed of upward increase
let g = 1 // gravity
let timer = null // timer id
let isLeft = false
let isRight = false
let isOnGround = false

let bulletX = x
let bulletY = y
let bulletDY = 20
let isFire = false
let bulletSize = 5

function drawBullet () {
    brush.fillStyle = "FFFFFF"
    brush.fillRect(bulletX, bulletY, bulletSize, bulletSize)
}

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)

drawBackground()
drawSquare()

function drawFrame () {
    dy = dy + g
    y = y + dy

    if (isFire) {
        bulletY = bulletY - bulletDY
    } else {
        bulletX = x
        bulletY = y
    }
    if (bulletY < 0) {
        isFire = false
    }

    if (isLeft) {
        x = x - dx
    }
    if (isRight) {
        x = x + dx
    }
    if (y > h - size) {
        y = h - size
        dy = 0
        isOnGround = true
    } else {
        isOnGround = false
    }
    if (x < 0 - size) {
        x = w - size
    }
    if (x > w) {
        x = 0 
    }
    drawBackground()
    drawSquare()
    drawBullet()
}

function drawBackground () {
    brush.fillStyle = "#555555"
    brush.fillRect(0, 0, w, h)
}

function drawSquare () {
    brush.fillStyle = "#FF0000"
    if (x < 0) {
        brush.fillRect(x, y, size, size) // Left part
        brush.fillRect(w + x, y, size, size) // Right part
    } else if (x > w - size) {
        brush.fillRect(x, y, size, size) // Right part
        brush.fillRect(x - w, y, size, size) // Left part
    } else {
        brush.fillRect(x, y, size, size)
    }

}

function onkeydown (e) {
    if (e.key === "Enter") { // "ArrowLeft"
       clearInterval(timer)
       y = 0
       timer = setInterval(drawFrame, 20)
    }
    if (e.key === "ArrowLeft") {
        isLeft = true
    }
    if (e.key === "ArrowRight") {
        isRight = true
    }
    if (e.key === " ") {
        if (isOnGround === true) {
            dy = dy - jumpImpact
        }
    }
    if (e.key === "f") {
        isFire = true
    }
}

function onkeyup (e) {
    if (e.key === "ArrowLeft") {
        isLeft = false
    }
    if (e.key === "ArrowRight") {
        isRight = false
    }
    if (e.key === " ") {
        
    }
}