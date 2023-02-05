import { Product } from '@/types'
import { Dispatch } from 'redux'

export const addItem = (item: Product) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'ADD_ITEM', item })
  }
}

export const removeItem = (item: Product) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'REMOVE_ITEM', item })
  }
}

export const decrementByOne = (item: Product) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'DECREMENT_BY_ONE', item })
  }
}
