import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addData } = valueSlice.actions

export default valueSlice.reducer