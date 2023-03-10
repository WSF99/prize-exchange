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
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      )
      if (itemIndex >= 0) {
        const updatedItem = {
          ...state.basket[itemIndex],
          quantity: state.basket[itemIndex].quantity + 1
        }
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, itemIndex),
            updatedItem,
            ...state.basket.slice(itemIndex + 1)
          ]
        }
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }]
        }
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        basket: state.basket.filter((item) => item !== action.item)
      }
    case 'DECREMENT_BY_ONE':
      const itemIdx = state.basket.findIndex(
        (item) => item.id === action.item.id
      )
      if (itemIdx >= 0 && state.basket[itemIdx].quantity > 0) {
        const updatedItem = {
          ...state.basket[itemIdx],
          quantity: state.basket[itemIdx].quantity - 1
        }
        if (updatedItem?.quantity === 0) {
          return {
            ...state,
            basket: state.basket.filter((item) => item !== action.item)
          }
        }
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, itemIdx),
            updatedItem,
            ...state.basket.slice(itemIdx + 1)
          ]
        }
      } else {
        return state
      }
    default:
      return state
  }
}
