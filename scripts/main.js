import { KneelDiamonds } from "./KneelDiamonds.js"
import { Metals } from "./Metals.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

