import { btnLightMode, btnDarkMode, turnDark } from "./elements.js"

export function DarkMode() {
    function on() {
        turnDark.classList.add("dark")
        btnLightMode.classList.add("hide")
        btnDarkMode.classList.remove("hide")
    }

    function off() {
        turnDark.classList.remove("dark")
        btnLightMode.classList.remove("hide")
        btnDarkMode.classList.add("hide")
    }

    return {
        on, 
        off
    }
}