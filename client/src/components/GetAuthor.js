import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MicOffIcon from '@mui/icons-material/MicOff'
import { useDispatch } from 'react-redux'
import { addAuthor } from '../features/book/bookSlice'
import { useNavigate } from 'react-router-dom'
const GetAuthor = () => {
  const { speak } = useSpeechSynthesis()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [author, setAuthor] = useState('')
  const [confirm, setConfirm] = useState(false)
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
    if (transcript.length !== 0) {
      setConfirm(true)
      speak({ text: 'The name of the author is:' })
      speak({ text: transcript })
      setAuthor(transcript)
      speak({ text: 'speak ok to continue else tap to speak again' })
    } else {
      speak({ text: 'speak author name again' })
    }
  }
  const stopCheck = () => {
    if (transcript === 'ok') {
      speak({ text: 'author confirmed' })
      dispatch(addAuthor(author))
      speak({ text: 'tap to speak book name' })
      navigate('/getBook')
    } else {
      setConfirm(false)
      speak({ text: 'tap to speak author name again' })
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
          )}
        </Box>
      ) : (
        <Box sx={{ width: '100%', height: '100%' }}>
          {listening ? (
            <Box>
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
              listing author
              <KeyboardVoiceIcon />
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default GetAuthor
