import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  author: '',
  name: '',
  path: {},
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload
    },
    addAuthor: (state, action) => {
      state.author = action.payload
    },
    addPath: (state, action) => {
      state.path = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addName, addAuthor, addPath } = bookSlice.actions

export default bookSlice.reducer
