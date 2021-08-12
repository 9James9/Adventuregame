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
buttonContainer.appendChild(allInBtn)
allInBtn.textContent = "All in"
allInBtn.addEventListener('click',allIn)

