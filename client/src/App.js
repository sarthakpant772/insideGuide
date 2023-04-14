import React from 'react'
import SpeechToText from './components/SpeechToText'
import TextToSpeech from './components/TextToSpeech'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
const App = () => {
  return (
    <Box sx={{ margin: 0 }}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<SpeechToText />} />
            <Route path="/textToSpeech" element={<TextToSpeech />} />
          </Routes>
        </Router>
      </Provider>
    </Box>
  )
}

export default App
