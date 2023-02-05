import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './reducers/basketReducer'
import balanceSlicer from './slicers/balanceSlicer'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    balance: balanceSlicer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
