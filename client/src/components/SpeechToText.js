import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useDispatch } from 'react-redux'
import { addAuthor, addName, addPath } from '../features/book/bookSlice'
import { useNavigate } from 'react-router-dom'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MicOffIcon from '@mui/icons-material/MicOff'
import paths from '../json/path.json'
const SpeechToText = () => {
  const { speak } = useSpeechSynthesis()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [book, setBook] = useState('')
  const [checkAuthor, setCheckAuthor] = useState(false)
  const [checkBook, setCheckBook] = useState(false)
  const [authorPage, setAuthorPage] = useState(true)
  const [confirmAuthor, setConfirmAuthor] = useState(true)
  const [confirmBook, setConfirmBook] = useState(true)
  const [listen, setListen] = useState(false) //make it false in real life situation
  useEffect(() => {
    SpeechRecognition.stopListening()
  }, [author, book])
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
    console.log(transcript)
    speak({ text: 'The name of your author is ' })
    speak({ text: transcript })
    speak({ text: 'Tap to speak the name of your book else swipe down' })

    setAuthorPage(false)
  }

  const stopListenBook = () => {
    setBook(transcript)
    console.log(transcript)
    speak({ text: 'The name of your book is' })
    speak({ text: transcript })
    speak({
      text: 'Tap to Listen to direction else swipe down to reset the process',
    })
    // const fil = path.filter(author)
    setListen(true)
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

  const listenStart = () => {
    setListen(false)
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

      {listen ? (
        <Box sx={{ width: '100%', height: '100%' }}>
          <Button
            sx={{ width: '100%', height: '100%' }}
            onClick={() => {
              handleSpeak()
            }}
          >
            Listen
          </Button>
        </Box>
      ) : (
        <Box sx={{ width: '100%', height: '100%' }}>
          {authorPage ? (
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
                  <KeyboardVoiceIcon />
                </Button>
              )}
              {/* <p>{author}</p> */}
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
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
      )}

      {/* <button onClick={resetTranscript}>Reset</button> */}
    </Box>
  )
}

export default SpeechToText
