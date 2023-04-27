import { Box, Button, Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextToSpeech = () => {
  const navigate = useNavigate()
  const name = useSelector((state) => state.book.author)
  const path = useSelector((state) => state.book.path)
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(true)

  const [stepNumber, setSteoNumber] = useState(-1)
  const [text, setText] = useState(path)
  const { speak } = useSpeechSynthesis()

  useEffect(() => {
    handleOnClick()
  }, [stepNumber])

  const handleOnClick = () => {
    console.log(path[1], stepNumber, 'check')
    speak({ text: path[stepNumber] })
    if (stepNumber >= path.length - 1) {
      speak({
        text:
          'Thank you for choosing our library We are please to server you. You have 15 days to return this book',
      })
      speak({
        text:
          'Tap to choose useType of your next Step else close the application',
      })
      navigate('/getUseType')
    }
    // console.log(path[1][stepNumber])
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
    console.log('this is length', path.length)
    if (stepNumber >= path.length - 1) {
      setRight(false)
    } else {
      setSteoNumber(stepNumber + 1)
      setLeft(true)
    }

    // handleOnClick()
  }

  return (
    <div>
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
