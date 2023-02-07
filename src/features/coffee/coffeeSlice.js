import { createSlice } from '@reduxjs/toolkit'

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    coffeeCount: 0,
    // totalCPS: 0
  },
  reducers: {
    increment: (state) => {
      state.coffeeCount += 1
    },
    incrementByAmount: (state, action) => {
      state.coffeeCount += action.payload
    },
  },
})

export const { increment, incrementByAmount } = coffeeSlice.actions

export default coffeeSlice.reducer
