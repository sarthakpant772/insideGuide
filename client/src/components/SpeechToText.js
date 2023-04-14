import { Box, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useDispatch } from 'react-redux'
import { addAuthor, addName, addPath } from '../features/book/bookSlice'
import { useNavigate } from 'react-router-dom'
import paths from '../json/path.json'
const SpeechToText = () => {
  const { speak } = useSpeechSynthesis()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [num, setNum] = useState(0)
  const [author, setAuthor] = useState('check')
  const [book, setBook] = useState('parking on the bed')
  const [ans, setAns] = useState('')
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
    setAuthor(transcript)
    SpeechRecognition.stopListening()
  }

  const stopListenBook = () => {
    setBook(transcript)
    SpeechRecognition.startListening()
    // const fil = path.filter(author)
  }

  const handleSpeak = async () => {
    const fil = paths.map((path) => {
      if (path.author === author) return path
    })
    console.log(fil[0].books)
    const check = fil[0].books.map((b) => {
      console.log(b)
      if (b.name === book) return b.path
    })
    console.log(check)
    dispatch(addName(book))
    dispatch(addAuthor(author))
    dispatch(addPath(check))
    navigate('/textToSpeech')
  }

  return (
    <Box sx={{ backgroundColor: '#ef233c', margin: 0 }}>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <h1>Author</h1>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={stopListenAuthor}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{author}</p>
      <h1>BOOK NAME</h1>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={stopListenBook}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{book}</p>
      <Box>
        <Button
          onClick={() => {
            handleSpeak()
          }}
        >
          Listen
        </Button>
      </Box>
    </Box>
  )
}

export default SpeechToText
