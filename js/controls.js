import { btnPlay, btnPause, btnStop, btnSet, setDisplay, display, btnAdd, btnSub } from "./elements.js"

export function Controls() {
    function play() {
        btnPlay.classList.add("hide")
        btnPause.classList.remove("hide")
        btnSet.classList.add("hide")
        btnStop.classList.remove("hide")
        display.classList.remove("hide")
        setDisplay.classList.add("hide")
    }

    function pause() {
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
    }

    function set() {
        setDisplay.classList.remove("hide")
        display.classList.add("hide")
    }

    function stop() {
        btnSet.classList.remove("hide")
        btnStop.classList.add("hide")
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
    }

    return {
        play,
        pause,
        set,
        stop
    }
}