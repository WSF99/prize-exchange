import { createSlice } from '@reduxjs/toolkit'

export const balanceSlicer = createSlice({
  name: 'balance',
  initialState: {
    value: 2000
  },
  reducers: {
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { decrementByAmount } = balanceSlicer.actions

export default balanceSlicer.reducer
