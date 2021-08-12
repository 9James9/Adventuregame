let container = document.querySelector('#container')
let totalMoney = document.createElement('h3')
container.appendChild(totalMoney)
let money = "1000"
totalMoney.textContent = `Your total balance is: $${money}`
function random(num) {
    return Math.floor(Math.random() * num)
}
function allIn () {
let value = random(2)
if (value == 0) {
    console.log('you lose')
    money -= money
    return totalMoney.textContent = `Your total balance is: $${money}`
} else if (value == 1) {
    console.log('you win')
    money *= 2
    return totalMoney.textContent = `Your total balance is: $${money}`
}
}
let buttonContainer = document.querySelector('#buttons')
let allInBtn = document.createElement('button')
allInBtn.classList.add('allinbtn')
buttonContainer.appendChild(allInBtn)
allInBtn.textContent = "All in"
allInBtn.addEventListener('click',allIn)


let stake500 = function () {
    let value = random(2)
    if (value == 0) {
        parseFloat(money -= 500)
        return totalMoney.textContent = `Your total balance is: $${money}`
    } else if (value == 1) {
        money = money + 500
        return totalMoney.textContent = `Your total balance is: $${money}`
    }
}


let gamble500 = document.createElement('button')
buttonContainer.appendChild(gamble500)
gamble500.classList.add('gamble500')
gamble500.textContent = "Gamble $500"
gamble500.addEventListener('click',stake500)

