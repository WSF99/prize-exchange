import { Product } from '@/types'
import { Action, Reducer } from 'redux'

interface BasketState {
  basket: Product[]
}

const initialState: BasketState = {
  basket: []
}

export const basketReducer: Reducer<BasketState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, basket: [...state.basket, action.item] }
    case 'REMOVE_ITEM':
      return {
        ...state,
        basket: state.basket.filter((item) => item !== action.item)
      }
    default:
      return state
  }
}
