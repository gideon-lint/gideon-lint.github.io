function get_money() {

let normal_rate = document.getElementById("d2").valueAsNumber
let overtime_rate = document.getElementById("d3").valueAsNumber
let hours_worked = document.getElementById("d4").valueAsNumber
let normal_hours = document.getElementById("d1").valueAsNumber

let money;

if (hours_worked <= normal_hours) {
    money = hours_worked * normal_rate
} else {
    money = normal_rate * normal_hours
    money += (hours_worked - normal_hours) * overtime_rate
}
document.getElementById("result").innerHTML = money + " dollars"
}

/*
a = 1
a += 1 //
a /= 2 // a = a / 2
a %= 2 //
a *= 2 //

a ** 2 // a to the power of 2
a % 2 // 0, % finds remainder
a % 3 // 1
*/