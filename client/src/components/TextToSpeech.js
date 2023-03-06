import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextToSpeech = () => {
  const [text, setText] = useState('')
  const { speak } = useSpeechSynthesis()
  const handleOnClick = () => {
    speak({ text: text })
  }
  return (
    <div>
      <Container>
        <h1> text to speech converter in react</h1>
        <textarea
          onChange={(e) => {
            setText(e.target.value)
          }}
        ></textarea>
        <Button
          onClick={() => {
            handleOnClick()
          }}
        >
          {' '}
          Listen
        </Button>
      </Container>
    </div>
  )
}

export default TextToSpeech
