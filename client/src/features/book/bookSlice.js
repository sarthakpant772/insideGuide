import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import paths from '../../json/path.json'
const initialState = {
  value: 0,
  userName: '',
  author: '',
  name: '',
  path: {},
  useType: '',
}

export const getBookPath = createAsyncThunk(
  'book/getBookPath',
  async ({ getState }) => {
    const state = getState()
    console.log(state)
    console.log('check redux', state.author, state.name)

    const fil = paths.map((path) => {
      if (path.author === state.author) return path
    })
    console.log(fil[0].books)
    const check = fil[0].books.map((b) => {
      console.log(b)
      if (b.name === state.name) return b.path
    })
    return check
  },
)

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBookName: (state, action) => {
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
    addUseType: (state, action) => {
      state.useType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookPath.fulfilled, (state, action) => {
      state.path = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const {
  addBookName,
  addAuthor,
  addPath,
  addUserName,
  addUseType,
} = bookSlice.actions

export default bookSlice.reducer
