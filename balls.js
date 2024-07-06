
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
        cuntEl.textContent = 0
        count = 0
}
save()
