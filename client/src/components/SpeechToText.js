import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
const SpeechToText = () => {
  const { speak } = useSpeechSynthesis()

  const paths = [
    {
      author: 'Sarthak',
      books: [
        {
          name: 'parking on the beach',
          path: 'Go right, Go right, Go straight',
        },
        {
          name: 'parking on the bed',
          path: 'Go right, Go left, Go straight',
        },
      ],
    },
  ]

  const [author, setAuthor] = useState('')
  const [book, setBook] = useState('')
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
    // try {
    setAns(check)
    // } catch (err) {
    console.log(ans)
    // } finally {
    speak({ text: ans })
    // }
  }

  return (
    <div>
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

      <Container>
        <Button
          onClick={() => {
            handleSpeak()
          }}
        >
          Listen
        </Button>
      </Container>
    </div>
  )
}

export default SpeechToText
