let container = document.querySelector('#container')
let totalMoney = document.createElement('h3')
container.appendChild(totalMoney)
let money = parseFloat("0")
totalMoney.textContent = `Your total balance is: $${money}`
let computerKills = 0 //for the score
function random(num) {
    return Math.floor(Math.random() * num)
}

function allIn() {
    let value = random(2)
    if (value == 0) {
        console.log('you lose')
        money -= money
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    } else if (value == 1) {
        console.log('you win')
        money *= 2
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    }
}
let buttonContainer = document.querySelector('#buttons')
buttonContainer.textContent = "Instant bets:"
let allInBtn = document.createElement('button')
allInBtn.classList.add('allinbtn')
buttonContainer.appendChild(allInBtn)
allInBtn.textContent = "All in"
allInBtn.addEventListener('click', allIn)
let info = document.querySelector('#info')

allInBtn.addEventListener('mouseover', () => {
    info.textContent = `Gamble $${money} for a 50% chance to double it!`
})
allInBtn.addEventListener('mouseout', () => {
    info.innerHTML = "<br>"
})
// Checks if money is negative and applies or removes class
checkDebt = function () {
    if (money < 0) {
        totalMoney.classList.add('inDebt')
    } else if (money > 0) {
        totalMoney.classList.remove('inDebt')
    }
}
let halfInBtn = document.createElement('button')
halfInBtn.textContent = "Half in"
buttonContainer.appendChild(halfInBtn)
halfInBtn.classList.add('halfinbtn')
halfInBtn.addEventListener('mouseover', () => {
    info.textContent = `Gamble $${money} for a 50% to double it!`
})
halfInBtn.addEventListener('mouseout', () => {
    info.innerHTML = "<br>"
})
function halfIn () {
    let value = random(2)
    if (value == 1) {
        money += (money / 2)
        //checkdebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    } else if (value == 0) {
        money -= (money /2)
        //checkdebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    }
}
halfInBtn.addEventListener('click',halfIn)
let stake500 = function () {
    let value = random(2)

    if (value == 0) {
        money -= 500
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    } else if (value == 1) {
        money += 500
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
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
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    } else if (value == 1) {
        money += 1000
        checkDebt()
        return totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    }
}
gamble1000.addEventListener('click', stake1000)
//set default values for comphp and yourhp
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
    checkBoss()
}

let fightButtons = document.querySelector('#fightbuttons')
let attackBtn = document.createElement('button')
attackBtn.textContent = "Attack"
fightButtons.appendChild(attackBtn)
attackBtn.addEventListener('click', attack)
//checks if comphp or yourhp is 0, and displays message and gives reward
let checkDeath = function () {
    if (yourhp < 1) {
        alert('Oh dear, you are dead.')
        attackBtn.disabled = true;
        eatShark.disabled = true;
        buyShark.disabled = true;
        unlockedMagic.disabled = true;
    } else if (comphp < 1) {
        attackBtn.disabled = true;
        eatShark.disabled = true;
        buyShark.disabled = true;
        unlockedMagic.disabled = true;
        alert('You have slain the computer.')
        money += (1000 * computerKills)
        computerKills += 1
        scoreContainer.textContent = `Your score is: ${computerKills}` //scoring
        totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`   
    } else if (yourhp < 30) {
            fightContainer.classList.add('lowhp')
    } else if (yourhp > 30) {
        fightContainer.classList.remove('lowhp')
    }
}
let eatShark = document.createElement('button')
eatShark.textContent = "Eat shark"
fightButtons.appendChild(eatShark)
//if sharks are available it will add 20hp instead of player attack and computer will still attack
let shark = function () {
    if (sharksLeft < 2) {
        eatShark.disabled = true;
        } else if (sharksLeft > 0) {
            eatShark.disabled = false;
        }
    yourhp += 20
    sharksLeft -= 1
    if (yourhp > 99) {
        yourhp = 99
    }
    stats.textContent = "You ate a shark"
    totalSharks.textContent = `You have ${sharksLeft} sharks left`
    playerhp.textContent = `Your HP is: ${yourhp}`
    computerAttack()
    checkDeath()
}
eatShark.addEventListener('click', shark)



var isFrozen = typeof isFrozen == 'undefined' ? false: isFrozen; //fixes error where isFrozen isn't defined if you don't use ise barrage

//calculates if the computer misses or not and then calculates damage if it hits
//if ice barrage was casted, there is a 1/3 chance to unfreeze. If still frozen it skips computer's attack until unfrozen
let computerAttack = function () {
    if (isFrozen == true) {
        let freezeTime = random(3)
        if (freezeTime < 1) {
            isFrozen = false;
        } else if (freezeTime > 1) {
            isFrozen = true;
            
            compStats.textContent = `The computer is still frozen and cannot attack!`
            return freezeTime -= 1;
        }
        

    } else if (isFrozen == false) {
        let compMiss = random(5)
        if (compMiss == 1 || compMiss == 0 || compMiss == 2) {
            compStats.textContent = 'The computer missed its attack!'
            playerhp.textContent = `Your HP is ${yourhp}`
        } else if (compMiss > 2) {
            let compDamage = random(25+computerKills) //increase damage as score goes up
            yourhp -= compDamage
            playerhp.textContent = `Your HP is ${yourhp}`
            compStats.textContent = `The computer hit a ${compDamage}`
        }
    }
    
}
//sets computer hp to 300 
let fightBoss = function () {
    attackBtn.disabled = false;
    eatShark.disabled = false;
    buyShark.disabled = false;
    unlockedMagic.disabled = false;
    comphp = parseFloat(300)
    //yourhp = parseFloat(99)
    computerhp.textContent = `Computer's HP: ${comphp}`
    playerhp.textContent = `Your HP is ${yourhp}`
    compStats.textContent = ""
    stats.textContent = "Boss Fight"
}


let sharksLeft = parseFloat(2)
let totalSharks = document.createElement('h5')
totalSharks.textContent = `You have ${sharksLeft} sharks left`

let fightTitle = document.querySelector('#fightTitle')
fightTitle.appendChild(totalSharks)

let boughtShark = function () {
    if (money >= 500) {
    money -= 500
    totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    sharksLeft += 1
    totalSharks.textContent = `You have ${sharksLeft} sharks left`
    } else if (money < 500) {
        alert(`You can't afford that!`)
    }
    if (eatShark.disabled = true) {
        eatShark.disabled = false;
    }
}
let buyShark = document.createElement('button')
fightButtons.appendChild(buyShark)
buyShark.textContent = "Buy shark for $500"
buyShark.addEventListener('click', boughtShark)

let bossBtn = document.createElement('button')
bossBtn.textContent = "Fight a boss"
fightButtons.appendChild(bossBtn)
bossBtn.addEventListener('click', fightBoss)

let newFight = document.createElement('button')
newFight.textContent = "New Fight"
fightButtons.appendChild(newFight)
//resets computer's hp and starts new fight
let startNewFight = function () {
    attackBtn.disabled = false;
    eatShark.disabled = false;
    buyShark.disabled = false;
    unlockedMagic.disabled = false;
    isFrozen = false;
    comphp = parseFloat(99)
    computerhp.textContent = `Computer's HP: ${comphp}`
    playerhp.textContent = `Your HP is ${yourhp}`
    compStats.textContent = ""
    stats.textContent = "Good Luck"
}
newFight.addEventListener('click',startNewFight)

let startOver = document.createElement('button')
let resetContainer = document.querySelector('#resetContainer')
resetContainer.appendChild(startOver)
startOver.textContent = "Start over"
startOver.addEventListener('click', () => {
    location.reload()
})

let fightContainer = document.querySelector('#fightContainer')

//ideas: add magic, add new bosses and higher levels, new type of food, higher level and different weapons you can buy, 
//add score and maybe a way to save highscores
//add 10x 100x buttons with a small chance of winning
let unlockMagic = document.createElement('button')
unlockMagic.textContent = "Unlock Magic for $1,000"
fightButtons.appendChild(unlockMagic)
unlockMagic.addEventListener('click',magic)

//hidden until unlock Magic is clicked
unlockedMagic = document.createElement('button')
unlockedMagic.textContent = "Cast Ice Barrage"
fightButtons.appendChild(unlockedMagic)
unlockedMagic.style.display = "none"

//when unlockMagic is clicked:
function magic () {
    if (money > 999) {
        unlockMagic.style.display = "none"
        unlockedMagic.style.display = ""
        money -= 1000
        totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
    }else if (money < 1000) {
        alert(`You can't afford that!`)
        }
}

unlockedMagic.addEventListener('click',iceBarrage)
function iceBarrage () {
    //computer attack
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
    //player attack
    let miss = random(10)
    if (miss == 1 || miss == 0) {
        stats.textContent = "Your Ice Barrage splashed"
    } else if (miss > 1) {
        let damage = random(40)
        stats.textContent = `You hit a ${damage}`
        comphp -= damage
        computerhp.textContent = `Computer's HP: ${comphp}`
        checkDeath()
        return isFrozen = true;
    } 
} 
let scoreContainer = document.querySelector('#scoreContainer')
scoreContainer.textContent = `Your score is: ${computerKills}`

function checkBoss () {
    if (computerKills > 2) { //checks if boss fight is available
        bossBtn.disabled = false;
    } else if (computerKills < 2) {
        bossBtn.disabled = true;
    }
}

bossBtn.disabled = true;
let healthPotion = function () {
    if (money > 4999) {
        money -= 5000
        totalMoney.textContent = `Your total balance is: $${money.toFixed(2)}`
        yourhp += 18
        playerhp.textContent = `Your HP is ${yourhp}`
        /*  //this code is my attempt to make the max health = 99 + computer kills. will remove comment when code works
        if (yourhp + 18 < maxHealth) {
            yourhp += 18
            playerhp.textContent = `Your HP is ${yourhp}`
        } else if (yourhp + 18 > maxHealth -1) {
            yourhp = maxHealth
            playerhp.textContent = `Your HP is ${yourhp}`
        } */
    } 
    
    else {alert(`You can't afford that!`)}
    
   }
let healthPotionBtn = document.createElement('button')
fightButtons.appendChild(healthPotionBtn)
healthPotionBtn.textContent = "Use Health Potion for $5000"
healthPotionBtn.addEventListener('click',healthPotion)
