import { configureStore } from '@reduxjs/toolkit'
import valueReducer from '../features/value/valueslice'

const store = configureStore({
  reducer: {
    value: valueReducer
  }
})

export default store