import { combineReducers } from 'redux'

import front from './front'
import cart from './cart'

const reducer = combineReducers({
  front,
  cart
})

export default reducer