import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  userName: '',
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
    addUserName: (state, action) => {
      state.userName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addName, addAuthor, addPath, addUserName } = bookSlice.actions

export default bookSlice.reducer
