import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextToSpeech = () => {
  const path =[{
    "sarthak":{
      "Parking on the beach":"Go right, Go left, Go straight",
      "Parking on the bed":"Go left, Go left, bed"
    }
  }]
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
