import { getAccessoryTypes, setAccessoryTypes } from "./database.js"

const accessories = getAccessoryTypes()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "accessoryType") {
            setAccessoryTypes(parseInt(event.target.value))
        }
    }
)

export const accessoryTypes  = () => {
    let html = "<ul>"

 const listItems = accessories.map(accessory => {
     return `<li>
     <input type="radio" name="accessoryType" class="accessoryOption" value="${accessory.id}" /> ${accessory.type}
     </li>`
 })
    html += listItems.join("")


    html += "</ul>"
    return html 
}