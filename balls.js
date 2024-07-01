// let myAge = 18
// let dogYear = 7

// agein= myAge * dogYear
// console.log(agein)

let cuntEl= document.getElementById("cunt")
console.log(cuntEl)

let count = 0
function increment() {
        count = count + 1
        cuntEl.innerText = count
        console.log(count)
}

function save() {
        console.log(count)
}
save()
    