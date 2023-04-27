import React from 'react'
import SpeechToText from './components/SpeechToText'
import TextToSpeech from './components/TextToSpeech'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Login from './components/Login'
import Register from './components/Register'
import Library from './components/Library'
import AddBooks from './components/AddBooks'
import AddNewBooks from './components/AddNewBooks'
import AddNewShelf from './components/AddNewShelf'
import SearchUser from './components/SearchUser'
import UserDetails from './components/UserDetails'
import IssueBook from './components/IssueBook'
import UserLogin from './components/UserLogin'
<<<<<<< HEAD
import HomePage from './components/HomePage'
=======
import GetAuthor from './components/GetAuthor'
import GetBook from './components/GetBook'
>>>>>>> 5cac23ec39c0d87f781e486a9ecedcf8bee78314
const App = () => {
  return (
    <Box sx={{ margin: '0px' }}>
      <Provider store={store}>
        <Router>
          <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<SpeechToText />} />
            <Route path="/textToSpeech" element={<TextToSpeech />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/loginUser" element={<UserLogin />} />
            <Route path="admin" element={<Library />}>
              <Route path="addBooks" element={<AddBooks />}>
                <Route path="book" element={<AddNewBooks />} />
                <Route path="shelf" element={<AddNewShelf />} />
              </Route>
              <Route path="checkUser" element={<SearchUser />}>
                <Route path="user" element={<UserDetails />} />
                <Route path="book" element={<IssueBook />} />
              </Route>
            </Route>
            <Route path="/getAuthor" element={<GetAuthor />} />
            <Route path="/getBook" element={<GetBook />} />
          </Routes>
        </Router>
      </Provider>
    </Box>
  )
}

export default App
