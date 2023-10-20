let canvas = document.getElementById("c1")
let painter = canvas.getContext("2d")

// Black Background
painter.fillStyle = "#000000"
painter.fillRect(0, 0, 400, 400)

// Red Square
painter.fillStyle = "#FF0000"
painter.fillRect(10, 10, 20, 20)


for (let j = 0, y = 10; j < 13; j = j + 1, y = y + 30){
     if (j % 2 == 0) {
        for (let i = 0, x = 10; i < 13; i = i + 1, x = x + 60) {
            painter.fillRect(x, y, 20, 20)
        }
     } else {
        for (let i = 0, x = 40; i < 13; i = i + 1, x = x + 60) {
            painter.fillRect(x, y, 20, 20)
        }
     }   
        
    }

    /*
    for (let i = 0, x = 10; i < 13; i = i + 1, x = x + 30) {
            painter.fillRect(x, y, 20, 20)
        }
    */

        let canvas2 = document.getElementById("c2")
        let painter2 = canvas2.getContext("2d")
        
        // Black Background
        painter2.fillStyle = "#000000"
        painter2.fillRect(0, 0, 400, 400)
        
        // Red Square
        painter2.fillStyle = "#FF0000"
        painter2.fillRect(10, 10, 20, 20)
      
        let i = 0
        let x = 10
        
        while (i < 13) {
            painter2.fillRect(x, 10, 20, 20)
            x = x + 30
            i = i + 1
        }