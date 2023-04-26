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
} from '../features/book/bookSlice'
import { useNavigate } from 'react-router-dom'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MicOffIcon from '@mui/icons-material/MicOff'
import paths from '../json/path.json'
const UserLogin = () => {
  const { speak } = useSpeechSynthesis()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  //make it false in real life situation
  useEffect(() => {
    SpeechRecognition.stopListening()
  }, [name])
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  const stopListenAuthor = () => {
    console.log(transcript)
    if (transcript.length !== 0) {
      setName(transcript)
      setConfirm(true)
      speak({ text: 'Your username is ' })
      speak({ text: transcript })
      speak({ text: 'tap and speak ok to confirm else say reset ' })
    }
  }

  const stopCheck = async () => {
    setName(transcript)
    console.log(transcript)
    dispatch(addUserName(transcript))
    if (transcript === 'ok') {
      try {
        const res = await axios.post('http://localhost:5000/users/signin', {
          username: name,
          password: '123',
        })
        speak({ text: 'username confirm' })
        speak({ text: 'tap and speak author of the book' })
        dispatch(addBookName(name))

        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        navigate('/getAuthor')
      } catch (error) {
        speak({ text: 'User name not confirmed speak again' })
      }
    } else {
      setConfirm(false)
    }
  }

  const listenStart = () => {
    SpeechRecognition.startListening()
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
            <Box sx={{ width: '100%', height: '100%' }}>
              <Button
                sx={{
                  fontSize: '100em',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fffff',
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
            <Box sx={{ width: '100%', height: '100%' }}>
              <Button
                sx={{
                  fontSize: '100em',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fffff',
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
              Tap to speak your User name
              <KeyboardVoiceIcon />
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default UserLogin
