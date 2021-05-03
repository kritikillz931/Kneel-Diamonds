import { addCustomOrder, orderBuilder } from "./database.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

addCustomOrder(orderBuilder())
renderAllHTML()

