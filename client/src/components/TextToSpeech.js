import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextToSpeech = () => {
  const path =[
{
    "Erwin":{
      "Advanced Engineering Mathematics":"Go right, Go straught, Go straight",
      "Differential Geometry":"Go left, Go left, go straight"
    }
},
{
    "Thomas":{
      "Introduction to Algorithms":"Go right, Go straight, Go straight"
    }
  },
  {
    "C. R. Wylie":{
      "Advanced Engineering Mathematics":"Go left, Go straight, Go right"
    }
  },
  {
    "Usha":{
      "The Queen of Indian Pop":"Go right, Go straught, Go straight"
    }
},
 {
    "Bill Gates":{
      "How to Prevent the Next Pandemic":"Go right, Go straught, Go straight",
      "The Road Ahead":"Go left, Go left, bed"
    }
},
{
    "Rajiv Bhatia":{
      "India–Africa Relations":"Go right, Go straught, Go straight"
    }
}
]
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
