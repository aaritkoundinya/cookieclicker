let cookies = 0
let cookiesPerClick = 1
let cookiesPerSecond = 0
let betterCursors = 0
let betterCursorCost = 15
let autoClickers = 0
let autoClickerCost = 20

let cookieButton = document.getElementById("cookieButton")
let cookieCount = document.getElementById("cookieCount")
let perClick = document.getElementById("perClick")
let perSecond = document.getElementById("perSecond")
let betterCursorButton = document.getElementById("betterCursorButton")
let betterCursorsText = document.getElementById("betterCursors")
let autoClickerButton = document.getElementById("autoClickerButton")
let autoClickersText = document.getElementById("autoClickers")
let achievementOne = document.getElementById("achievementOne")
let achievementTwo = document.getElementById("achievementTwo")
let achievementThree = document.getElementById("achievementThree")

cookieButton.addEventListener("click", function() {
    cookies = cookies + cookiesPerClick
    updateScreen()
    checkAchievements()
})

betterCursorButton.addEventListener("click", function() {
    if (cookies >= betterCursorCost) {
        cookies = cookies - betterCursorCost
        betterCursors = betterCursors + 1
        cookiesPerClick = cookiesPerClick + 1
        betterCursorCost = betterCursorCost + 10
        updateScreen()
        checkAchievements()
    }
})

autoClickerButton.addEventListener("click", function() {
    if (cookies >= autoClickerCost) {
        cookies = cookies - autoClickerCost
        autoClickers = autoClickers + 1
        cookiesPerSecond = cookiesPerSecond + 1
        autoClickerCost = autoClickerCost + 15
        updateScreen()
        checkAchievements()
    }
})

setInterval(function() {
    cookies = cookies + cookiesPerSecond
    updateScreen()
    checkAchievements()
}, 1000)

function updateScreen() {
    cookieCount.textContent = cookies
    perClick.textContent = cookiesPerClick
    perSecond.textContent = cookiesPerSecond
    betterCursorsText.textContent = betterCursors
    betterCursorButton.textContent = "Buy Better Cursor (costs " + betterCursorCost + " cookies)"
    autoClickersText.textContent = autoClickers
    autoClickerButton.textContent = "Buy Auto Clicker (costs " + autoClickerCost + " cookies)"
}

function checkAchievements() {
    if (cookies >= 10) {
        achievementOne.hidden = false
    }

    if (cookies >= 25) {
        achievementTwo.hidden = false
    }

    if (cookies >= 50) {
        achievementThree.hidden = false
    }
}

updateScreen()
