import { btnForest, btnRain, btnCoffeeShop, btnFirePlace, forestSound, rainSound, coffeeShopSound, firePlaceSound } from "./elements.js"

export function Sounds() {
    const btnList = [btnForest, btnRain, btnCoffeeShop, btnFirePlace]
    let clicks = 0

    function removeHide() {
        btnList.forEach(btn => {
            btn.classList.remove("select")
        })
    }

    function start(btn, type) {
        if (btn.className === "select") {
            btn.classList.remove("select")
            type.pause()
        } else {
            removeHide()
            btn.classList.add("select")
            type.play()
        }
        clicks++
    }
    
    function selecting(btn, type) {
        if(clicks === 0) {
            start(btn, type)
        } else {
            forestSound.pause()
            rainSound.pause()
            coffeeShopSound.pause()
            firePlaceSound.pause()
            start(btn, type)
        }
    }

    return {
        selecting,
    }
}
