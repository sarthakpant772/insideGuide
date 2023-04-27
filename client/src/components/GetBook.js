import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import MicOffIcon from '@mui/icons-material/MicOff'
import { useDispatch, useSelector } from 'react-redux'
import { addBookName, addName, getBookPath } from '../features/book/bookSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
const GetBook = () => {
  const navigate = useNavigate()
  const [confirm, setConfirm] = useState(false)
  const [book, setBook] = useState()
  const dispatch = useDispatch()
  const { speak } = useSpeechSynthesis()
  // const author = useSelector((state) => state.book.author)
  const author = 'pant'
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  const stopCheck = async () => {
    const token = localStorage.getItem('token')
    if (transcript === 'ok') {
      speak({ text: 'Book confirmed' })
      dispatch(addBookName(book))
      const bookData = await axios.post(
        'http://localhost:5000/book/getBookByName',
        {
          book: book,
          author: author,
        },
      )
      console.log(bookData.data)
      speak({
        text: 'tap on right for next direction and left for previous direction',
      })
      navigate('/textToSpeech')
    } else {
      setConfirm(false)
      speak({ text: 'tap to speak book name again' })
    }
  }

  const stopListenBook = () => {
    setBook(transcript)
    console.log(transcript)
    speak({ text: 'The name of your book is' })
    speak({ text: transcript })
    speak({
      text: 'speak ok to continue else tap to speak again',
    })
    // const fil = path.filter(author)
    setConfirm(true)
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
      {confirm ? (
        <Box sx={{ height: '100%', width: '100%' }}>
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
        <Box sx={{ height: '100%', width: '100%' }}>
          {listening ? (
            <Button
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fffff',
              }}
              onClick={stopListenBook}
            >
              <MicOffIcon />
            </Button>
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
      )}
    </Box>
  )
}

export default GetBook
