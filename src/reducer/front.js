import { S8, S9, S10, IPHONE8 } from '../Pages/image'

const initialState = [
    {
        idProduct: 1,
        itemName: "Samsung S8 Plus 6/64",
        itemDesc: "The phone is powered by Octa core 2.3 GHz, Quad core, M2 Mongoose + 1.7 GHz, Quad core, Cortex A53 processor. It runs on the Samsung Exynos 9 Octa 8895 Chipset.",
        price: 5000000,
        disc: 10,
        image: S8
    },
    {
        idProduct: 2,
        itemName: "Samsung S9 Plus 6/64",
        itemDesc: "It has a 6.2-inch Quad HD+ Super AMOLED display with an 18.5:9 aspect ratio. Touch response and colours are superb and it also supports HDR",
        price: 6500000,
        disc: 10,
        image: S9
    },
    {
        idProduct: 3,
        itemName: "Samsung S10 Plus 8/128",
        itemDesc: "The phone is powered by Octa core (2.73 GHz, Dual core, M4 Mongoose + 2.31 GHz, Dual core, Cortex A75 + 1.95 GHz, Quad core, Cortex A55) processor. It runs on the Samsung Exynos 9 Octa 9820 Chipset. It has 8 GB RAM and 128 GB internal storage.",
        price: 8500000,
        disc: 10,
        image: S10
    },
    {
        idProduct: 4,
        itemName: "Iphone 8 Plus 4/64",
        itemDesc: "The iPhone 8 Plus is a larger version of the iPhone 8, with a larger screen and battery, more RAM, and a secondary telephoto camera on the rear.",
        price: 7500000,
        disc: 10,
        image: IPHONE8
    }
]

const frontFunc = (currentState = initialState, action) => {
    return currentState
}

export default frontFunc