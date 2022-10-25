import { minutesOnDisplay, secondsOnDisplay, minutesSet, secondsSet } from "./elements.js"

export function Timer({ controls }) {
    
    let timerTimeOut
    let runningMinutes
    let runningSeconds
    let minutesSetted = minutesOnDisplay.textContent
    let secondsSetted = secondsOnDisplay.textContent

    function upDateMinutesDisplay(minutes) {
        minutesOnDisplay.innerText = String(minutes).padStart(2, "0")
    }
    function upDateSecondsDisplay(seconds) {
        secondsOnDisplay.innerText = String(seconds).padStart(2, "0")
    }

    function set() {
        minutesSet.addEventListener("input", () => {
            upDateMinutesDisplay(minutesSet.value)
            minutesSetted = minutesSet.value
        })
        secondsSet.addEventListener("input", () => {
            upDateSecondsDisplay(secondsSet.value)
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
                upDateMinutesDisplay(runningMinutes - 1)
            }

            upDateSecondsDisplay(runningSeconds - 1)
            play()
        }, 1000)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    function stop() {
        clearTimeout(timerTimeOut)
        upDateMinutesDisplay(minutesSetted)
        upDateSecondsDisplay(secondsSetted)
    }

    function addFiveMinutes() {
        upDateMinutesDisplay(runningMinutes + 5)
    }

    function subFiveMinutes() {
        if(runningMinutes > 5) {
            upDateMinutesDisplay(runningMinutes - 5)
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