import { Box, Button, Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextToSpeech = () => {
  const name = useSelector((state) => state.book.author)
  const path = useSelector((state) => state.book.path)
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(true)

  const [stepNumber, setSteoNumber] = useState(0)
  const [text, setText] = useState(path)
  const { speak } = useSpeechSynthesis()

  useEffect(() => {
    handleOnClick()
  }, [stepNumber])

  const handleOnClick = () => {
    console.log(path[1], stepNumber, 'check')
    speak({ text: path[1][stepNumber] })
    console.log(path[1][stepNumber])
  }

  const previousStep = () => {
    if (stepNumber <= 0) {
      setLeft(false)
    } else {
      setSteoNumber(stepNumber - 1)
      setRight(true)
    }
    // handleOnClick()
  }
  const nextStep = () => {
    console.log(path[1].length)
    if (stepNumber > path[1].length) {
      setRight(false)
    } else {
      setSteoNumber(stepNumber + 1)
      setLeft(true)
    }
    console.log(path[1].length)

    // handleOnClick()
  }

  return (
    <div>
      {/* <Container>
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
      </Container> */}

      <Box
        sx={{
          margin: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ width: '50%', height: '100%', backgroundColor: '#ef233c' }}>
          {left ? (
            <Button
              sx={{ width: '100%', height: '100%' }}
              onClick={() => previousStep()}
            >
              Previous Step
            </Button>
          ) : (
            <Button sx={{ width: '100%', height: '100%' }}>Cant Go Back</Button>
          )}
        </Box>
        <Box sx={{ width: '50%', height: '100%', backgroundColor: '#d90429' }}>
          {right ? (
            <Button
              sx={{ width: '100%', height: '100%' }}
              onClick={() => nextStep()}
            >
              Next Step
            </Button>
          ) : (
            <Button sx={{ width: '100%', height: '100%' }}>
              Cant Go Forward
            </Button>
          )}
        </Box>
      </Box>
    </div>
  )
}

export default TextToSpeech
