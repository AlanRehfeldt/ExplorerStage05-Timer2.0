const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const btnSet = document.querySelector(".set")
const btnAdd = document.querySelector(".add")
const btnSub = document.querySelector(".subtract")
const btnForest = document.querySelector("#forest")
const btnRain = document.querySelector("#rain")
const btnCoffeeShop = document.querySelector("#coffee-shop")
const btnFirePlace = document.querySelector("#fire-place")

const setDisplay = document.querySelector(".set-timer")
const display = document.querySelector(".timer-display")

const minutesSet = document.querySelector("#set-minutes")
const secondsSet = document.querySelector("#set-seconds")
const minutesOnDisplay = document.querySelector("#minutes-on-display")
const secondsOnDisplay = document.querySelector("#seconds-on-display")

const forestSound = new Audio("./sounds/Floresta.wav") 
const rainSound = new Audio("./sounds/Chuva.wav") 
const coffeeShopSound = new Audio("./sounds/Cafeteria.wav") 
const firePlaceSound = new Audio("./sounds/Lareira.wav") 

export {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnAdd,
    btnSub,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFirePlace,
    setDisplay,
    display,
    minutesSet,
    secondsSet,
    minutesOnDisplay,
    secondsOnDisplay,
    forestSound,
    rainSound,
    coffeeShopSound,
    firePlaceSound
}