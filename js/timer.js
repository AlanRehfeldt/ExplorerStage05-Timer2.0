import { minutesOnDisplay, secondsOnDisplay, minutesSet, secondsSet } from "./elements.js"

export function Timer({ controls }) {
    
    let timerTimeOut
    let runningMinutes
    let runningSeconds
    let minutesSetted = minutesOnDisplay.textContent
    let secondsSetted = secondsOnDisplay.textContent

    function upDateDisplay(minutes, seconds) {
        minutesOnDisplay.innerText = String(minutes.padStart(2, "0"))
        secondsOnDisplay.innerText = String(seconds.padStart(2, "0"))
    }

    function set() {
        minutesSet.addEventListener("input", () => {
            minutesOnDisplay.innerText = minutesSet.value.padStart(2, "0")
            minutesSetted = minutesSet.value
        })
        secondsSet.addEventListener("input", () => {
            secondsOnDisplay.innerText = secondsSet.value.padStart(2, "0")
            secondsSetted = secondsSet.value
        })
    }
    
    function play() {
        timerTimeOut = setTimeout(() => {
            runningSeconds = Number(secondsOnDisplay.textContent)
            runningMinutes = Number(minutesOnDisplay.textContent)

            if(runningMinutes === 0 && runningSeconds === 0) {
                stop()
                controls.stop()
                return
            }

            if(runningSeconds === 0) {
                runningSeconds = 60
                minutesOnDisplay.innerText = String(runningMinutes - 1).padStart(2, "0")
            }

            secondsOnDisplay.innerText = String(runningSeconds - 1).padStart(2, "0")
            play()
        }, 1000)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    function stop() {
        clearTimeout(timerTimeOut)
        minutesOnDisplay.innerText = minutesSetted.padStart(2, "0")
        secondsOnDisplay.innerText = secondsSetted.padStart(2, "0")
    }

    function addFiveMinutes() {
        minutesOnDisplay.innerText = String(runningMinutes + 5).padStart(2, "0")
    }

    function subFiveMinutes() {
        if(runningMinutes > 5) {
            minutesOnDisplay.innerText = String(runningMinutes - 5).padStart(2, "0")
        }
    }

    return {
        set,
        play,
        pause,
        stop,
        addFiveMinutes,
        subFiveMinutes
    }
}