import { SUBMIT_DATA, UPDATE_DATA, DELETE_DATA } from './constant'

export const submitData = payload => {
  return {
    type: SUBMIT_DATA,
    payload
  }
}

export const updateData = payload => {
  return {
    type: UPDATE_DATA,
    payload
  }
}

export const deleteData = payload => {
  return {
    type: DELETE_DATA,
    payload
  }
}