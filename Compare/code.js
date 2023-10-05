function get_max (){
    // get numbers from input boxes
    let a = document.getElementById("i1").valueAsNumber
    let b = document.getElementById("i2").valueAsNumber
    let c = document.getElementById("i3").valueAsNumber
    // compare numbers
    let max = a
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
    // display max
    document.getElementById("max").innerHTML = max
}

