let cookies = 0
let cookiesPerClick = 1

let cookieButton = document.getElementById("cookieButton")
let cookieCount = document.getElementById("cookieCount")
let perClick = document.getElementById("perClick")

cookieButton.addEventListener("click", function() {
    cookies = cookies + cookiesPerClick
    updateScreen()
})

function updateScreen() {
    cookieCount.textContent = cookies
    perClick.textContent = cookiesPerClick
}

updateScreen()
