import { SUBMIT_DATA, UPDATE_DATA, DELETE_DATA } from '../action/constant'


const initialState = [
    {
        id: 1,
        name: "Muhammad Fadlil",
        address: "Jakarta"
    }
]

const dataFunc = (currentState = initialState, action) => {
  switch (action.type) {
    case SUBMIT_DATA:
        return [...currentState, action.payload]
    case UPDATE_DATA:
        const result = [
            ...currentState
        ]
        result[action.payload.index] = {
                id: action.payload.id,
                name: action.payload.name,
                address: action.payload.address
            }
        return result
    case DELETE_DATA:
        const resultData = [
            ...currentState
        ]
        resultData.splice(action.payload.index, 1)
        return resultData
    default:
        return currentState
  }
}

export default dataFunc