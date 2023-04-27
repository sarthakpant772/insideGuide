import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {
  addAuthor,
  addBookName,
  addName,
  addPath,
  addUserName,
  addUseType,
} from '../features/book/bookSlice'
import { useNavigate } from 'react-router-dom'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MicOffIcon from '@mui/icons-material/MicOff'
import paths from '../json/path.json'

const Check = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { speak } = useSpeechSynthesis()
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  const listenStart = () => {
    SpeechRecognition.startListening()
  }

  const stopListenAuthor = () => {
    console.log(transcript)
    if (transcript.length !== 0) {
      setName(transcript)
      setConfirm(true)
      speak({ text: 'You want to' })
      speak({ text: transcript })
      speak({ text: 'tap and speak ok to confirm else say reset ' })
    }
  }

  const stopCheck = async () => {
    setName(transcript)
    console.log(transcript)

    if (transcript === 'ok') {
      speak({ text: 'UseType confirm' })

      if (name === 'return') {
        dispatch(addUseType('return'))
        speak({ text: 'tap to speak author' })
        navigate('/getAuthor')
      } else {
        dispatch(addUseType('issue'))
        navigate('/getAuthor')
        speak({ text: 'tap to speak author' })
      }
    } else {
      setConfirm(false)
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: '#ef233c',
        margin: 0,
        height: '100vh',
        width: '100%',
      }}
    >
      {/* changing size of Listen box */}
      {confirm ? (
        <Box sx={{ width: '100%', height: '100%' }}>
          {listening ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#007f5f',
              }}
            >
              <Button
                sx={{
                  width: '100%',
                  height: '100%',
                  color: '#ffff3f',
                }}
                onClick={stopCheck}
              >
                <MicOffIcon />
              </Button>
            </Box>
          ) : (
            <Button
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fffff',
              }}
              onClick={listenStart}
            >
              <KeyboardVoiceIcon />
            </Button>
          )}{' '}
        </Box>
      ) : (
        <Box sx={{ width: '100%', height: '100%' }}>
          {listening ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#007f5f',
              }}
            >
              <Button
                sx={{
                  width: '100%',
                  height: '100%',
                  color: '#ffff3f',
                }}
                onClick={stopListenAuthor}
              >
                <MicOffIcon />
              </Button>
            </Box>
          ) : (
            <Button
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fffff',
              }}
              onClick={listenStart}
            >
              Tap to speak Use Type
              <KeyboardVoiceIcon />
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default Check
