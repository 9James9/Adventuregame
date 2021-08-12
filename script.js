let container = document.querySelector('#container')
let totalMoney = document.createElement('h3')
container.appendChild(totalMoney)
let money = parseFloat("1000")
totalMoney.textContent = `Your total balance is: $${money}`

function random(num) {
    return Math.floor(Math.random() * num)
}

function allIn() {
    let value = random(2)
    if (value == 0) {
        console.log('you lose')
        money -= money
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    } else if (value == 1) {
        console.log('you win')
        money *= 2
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    }
}
let buttonContainer = document.querySelector('#buttons')
buttonContainer.textContent = "Instant bets:"
let allInBtn = document.createElement('button')
allInBtn.classList.add('allinbtn')
buttonContainer.appendChild(allInBtn)
allInBtn.textContent = "All in"
allInBtn.addEventListener('click', allIn)

checkDebt = function () {
    if (money < 0) {
        totalMoney.classList.add('inDebt')
    } else if (money > 0) {
        totalMoney.classList.remove('inDebt')
    }
}

let stake500 = function () {
    let value = random(2)

    if (value == 0) {
        money -= 500
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    } else if (value == 1) {
        money += 500
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    }

}

let gamble500 = document.createElement('button')
buttonContainer.appendChild(gamble500)
gamble500.classList.add('gamble500')
gamble500.textContent = "Gamble $500"
gamble500.addEventListener('click', stake500)

let gamble1000 = document.createElement('button')
buttonContainer.appendChild(gamble1000)
gamble1000.classList.add('gamble1000')
gamble1000.textContent = "Gamble $1000"

let stake1000 = function () {
    let value = random(2)
    if (value == 0) {
        money -= 1000
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    } else if (value == 1) {
        money += 1000
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money}`
    }
}
gamble1000.addEventListener('click', stake1000)

let computerhp = document.querySelector('#comphp')
let playerhp = document.querySelector('#yourhp')
let comphp = parseFloat(99)
let yourhp = parseFloat(99)
computerhp.textContent = `Computer's HP: ${comphp}`
playerhp.textContent = `Your HP is: ${yourhp}`
let stats = document.querySelector('#fightstats')
let compStats = document.querySelector('#compstats')

let attack = function () {
    let miss = random(5)
    if (miss == 1 || miss == 0) {
        stats.textContent = "You missed your attack"
    } else if (miss > 1) {
        let damage = random(25)
        stats.textContent = `You hit a ${damage}`
        comphp -= damage
        computerhp.textContent = `Computer's HP: ${comphp}`
    }
    computerAttack()
    checkDeath()
}

let fightButtons = document.querySelector('#fightbuttons')
let attackBtn = document.createElement('button')
attackBtn.textContent = "Attack"
fightButtons.appendChild(attackBtn)
attackBtn.addEventListener('click', attack)

let checkDeath = function () {
    if (yourhp < 1) {
        alert('Oh dear, you are dead.')
    } else if (comphp < 1) {
        alert('You have slain the computer.')
        money += 10000
        totalMoney.textContent = `Your total balance is: $${money}`
    }
}
let eatShark = document.createElement('button')
eatShark.textContent = "Eat shark"
fightButtons.appendChild(eatShark)

let shark = function () {
    yourhp += 20
    stats.textContent = "You ate a shark"
    computerAttack()
    checkDeath()
}
eatShark.addEventListener('click', shark)

let computerAttack = function () {
    let compMiss = random(5)
    if (compMiss == 1 || compMiss == 0 || compMiss == 2) {
        compStats.textContent = 'The computer missed its attack!'
        playerhp.textContent = `Your HP is ${yourhp}`
    } else if (compMiss > 2) {
        let compDamage = random(25)
        yourhp -= compDamage
        playerhp.textContent = `Your HP is ${yourhp}`
        compStats.textContent = `The computer hit a ${compDamage}`
    }
}