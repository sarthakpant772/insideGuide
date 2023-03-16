import React from 'react'
import SpeechToText from './components/SpeechToText'
import TextToSpeech from './components/TextToSpeech'
import { store } from './app/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <SpeechToText />
      </Provider>
    </div>
  )
}

export default App
