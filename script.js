let cookies = 0
let cookiesPerClick = 1

let cookieButton = document.getElementById("cookieButton")
let cookieCount = document.getElementById("cookieCount")
let perClick = document.getElementById("perClick")
let achievementOne = document.getElementById("achievementOne")
let achievementTwo = document.getElementById("achievementTwo")
let achievementThree = document.getElementById("achievementThree")

cookieButton.addEventListener("click", function() {
    cookies = cookies + cookiesPerClick
    updateScreen()
    checkAchievements()
})

function updateScreen() {
    cookieCount.textContent = cookies
    perClick.textContent = cookiesPerClick
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
