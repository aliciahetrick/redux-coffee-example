import { configureStore } from '@reduxjs/toolkit'

import coffeeSlice from '../features/coffee/coffeeSlice'

export default configureStore({
  reducer: {
    coffee: coffeeSlice,
  },
})
