// let myAge = 18
// let dogYear = 7

// let notif = "You have 3 new notifications"
//console.log(notif)

// agein= myAge * dogYear
// console.log(agein)
let saveEl = document.getElementById("save-el")
let cuntEl= document.getElementById("cunt")
console.log(saveEl)

let count = 0
function increment() {
        count += 1
        cuntEl.textContent = count
        console.log(count)
}

function save() {
        let countStr = count + " - "
        saveEl.textContent += countStr
        console.log(count)
}
save()
