import { Events } from "./events.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";
import { DarkMode  } from "./darkMode.js";

const controls = Controls()
const timer = Timer({ controls })
const sounds = Sounds()
const darkMode = DarkMode()

Events({ controls, timer, sounds, darkMode })

