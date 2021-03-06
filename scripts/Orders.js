import { getOrders, getMetals, getSizes, getStyles, getAccessoryTypes } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const accessories = getAccessoryTypes()



// Remember that the function you pass to find() must return true/false



export const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        } 
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundAccessoryType = accessories.find(
        (accessory) => {
            return accessory.id === order.accessoryId
        }
    )

    let totalCost = foundMetal.price + foundSize.price + foundStyle.price 
        if (foundAccessoryType.id === 1) {
            totalCost
        }
        else if (foundAccessoryType.id === 2) {
            totalCost *= 2
        }
        else if (foundAccessoryType.id === 3) {
            totalCost *= 3
        }
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    


    return `<li>
        Order #${order.id} cost ${costString} ${new Date(order.timestamp).toLocaleString()}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(order => {
        console.log(order)
        return buildOrderListItem(order)
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}

