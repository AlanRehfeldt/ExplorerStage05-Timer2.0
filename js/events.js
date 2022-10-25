import { btnPlay, btnPause, btnStop, btnSet, btnAdd, btnSub, btnForest, btnRain, btnCoffeeShop, btnFirePlace, forestSound, rainSound, coffeeShopSound, firePlaceSound, btnLightMode, btnDarkMode } from "./elements.js"

export function Events({ controls, timer, sounds, darkMode }) {
    btnForest.addEventListener("click", () => {
        sounds.selecting(btnForest, forestSound)
    })
    btnRain.addEventListener("click", () => {
        sounds.selecting(btnRain, rainSound)
    })
    btnCoffeeShop.addEventListener("click", () => {
        sounds.selecting(btnCoffeeShop, coffeeShopSound)
    })
    btnFirePlace.addEventListener("click", () => {
        sounds.selecting(btnFirePlace, firePlaceSound)
    })
    
    btnPlay.addEventListener("click", () => {
        controls.play()
        timer.play()
    })
    
    btnPause.addEventListener("click", () => {
        controls.pause()
        timer.pause()
    })

    btnStop.addEventListener("click", () => {
        controls.stop()
        timer.stop()
    })

    btnSet.addEventListener("click", () => {
        controls.set()
        timer.set()
    })
    
    btnAdd.addEventListener("click", () => {
        timer.addFiveMinutes()
    })

    btnSub.addEventListener("click", () => {
        timer.subFiveMinutes()
    })

    btnLightMode.addEventListener("click", () => {
        darkMode.on()
    })

    btnDarkMode.addEventListener("click", () => {
        darkMode.off()
    })
}





