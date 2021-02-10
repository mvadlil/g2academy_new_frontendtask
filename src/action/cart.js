import { ADD_TO_CART, DELETE_CART, ADD_ITEM, REDUCE_ITEM } from './constants'

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export const deleteCart = () => {
  return {
    type: DELETE_CART
  }
}

export const addItem = payload => {
  return {
    type: ADD_ITEM,
    payload
  }
}

export const reduceItem = payload => {
  return {
    type: REDUCE_ITEM,
    payload
  }
}

