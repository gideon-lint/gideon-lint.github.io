let painter = document.getElementById("c1").getContext("2d")
let big = 10 // size of large square
let small = 4 // size of small square


for (let r = 0; r < 400/big; ++r) {
    for (let c = 0; c < 400/big; ++c) {
        if ((r+c)%2 == 0) {
            painter.fillStyle = "#BBBBBB"
        } else {
            painter.fillStyle = "#555555"
        }
        painter.fillRect(c*big, r*big, big, big)
        
    }
    
}

for (let r = 0; r < 400/big - 1; ++r) {
    for (let c = 0; c < 400/big - 1; ++c) {
        if ((r+c)%2 == 0) {
            painter.fillStyle = "#000000"
        } else {
            painter.fillStyle = "#FFFFFF"
        }
        if (r > 1/4*400/big && r < 3/4*400/big && c > 1/4*400/big && c < 3/4*400/big) {
            if (painter.fillStyle === "#000000") {
                painter.fillStyle = "#FFFFFF"
            } else {
                painter.fillStyle = "#000000"
            }
        }
        painter.fillRect(c*big + big-small/2, r*big + big-small/2, small, small)
        
    }
    
}


/*
let number = 0
label1:
for(let r = 0; r < 13; ++r) {
    for(let c = 0; c < 13; ++c) {
        if (number == 30) {
            break label1
        }
        painter.fillRect(10 + c*30, 10 + r*30, 20, 20)
        number = number + 1
    }
}
*/
