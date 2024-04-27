let first = document.getElementById('firstformat')
let second = document.getElementById('secondFormat')
let third = document.getElementById('thirdFormat')
let fourth = document.getElementById('fourtFormat')
let fifth = document.getElementById('fifthFormat')

function updateTime() {
    let currentTime = dateFns.format(new Date(), "hh:mm:ss a");
    let first = document.getElementById("currentTime")
    first.innerHTML = currentTime
}

updateTime()

setInterval(updateTime, 1000)


let firstformat = dateFns.format(new Date(), "MM/dd/yyyy hh:mm:ss")
console.log("firstformat: ", firstformat);

let secondFormat = dateFns.format(new Date(), "EE dd/MM/yyyy hh.mm")

console.log("secondFormat: ", secondFormat);

let thirdFormat = dateFns.format(new Date(), "yyyy-MM-dd hh.mm.ss EEEE")

console.log("thirdFormat: ", thirdFormat);

let fourtFormat = dateFns.format(new Date(), "MMMM do, yyyy hh.mm.ss a")

console.log("fourtFormat: ", fourtFormat);

let fifthFormat = dateFns.format(new Date(), "dd MMMM yyyy 'at' hh:mm a")

console.log("fifthFormat: ", fifthFormat);

first.innerHTML = firstformat
second.innerHTML = secondFormat
third.innerHTML = thirdFormat
fourth.innerHTML = fourtFormat
fifth.innerHTML = fifthFormat