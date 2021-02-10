import { S8, S9, S10, IPHONE8 } from '../Pages/image'
import { ADD_TO_CART, DELETE_CART, ADD_ITEM, REDUCE_ITEM } from '../action/constants'

const initialState = [
    {
        idProduct: 1,
        itemName: "Samsung S8 Plus 6/64",
        itemDesc: "The phone is powered by Octa core 2.3 GHz, Quad core, M2 Mongoose + 1.7 GHz, Quad core, Cortex A53 processor. It runs on the Samsung Exynos 9 Octa 8895 Chipset.",
        price: 5000000,
        disc: 10,
        image: S8,
        qty: 1
    }
]

const cartFunc = (currentState = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...currentState, action.payload]
        case DELETE_CART:
            const resultData = [
                ...currentState
            ]
            resultData.splice(action.payload, 1)
            return resultData
        case ADD_ITEM: 
            const resultData2 = [
                ...currentState
            ]
            resultData2[action.payload].qty += 1
            return resultData2
        case REDUCE_ITEM: 
            if (currentState[action.payload].qty == 1) {
                return currentState
            } else {
                const resultData3 = [
                    ...currentState
                ]
                resultData3[action.payload].qty -= 1
                return resultData3
            }
        default:
            return currentState
    }
}

export default cartFunc