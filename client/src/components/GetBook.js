import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import MicOffIcon from '@mui/icons-material/MicOff'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBookName,
  addName,
  addPath,
  getBookPath,
} from '../features/book/bookSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
const GetBook = () => {
  const navigate = useNavigate()
  const useType = useSelector((state) => state.book.useType)
  const username = useSelector((state) => state.book.userName)
  // const username = 'Sarthak'
  // const useType = 'reject'
  const [confirm, setConfirm] = useState(false)
  const [book, setBook] = useState('Aastha')
  const dispatch = useDispatch()
  const { speak } = useSpeechSynthesis()
  useEffect(() => {
    SpeechRecognition.stopListening()
  }, [book])
  const author = useSelector((state) => state.book.author)
  // const author = 'Aastha'
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
      if (useType === 'issue') {
        dispatch(addBookName(book))
        const bookData = await axios.post(
          'http://localhost:5000/book/getBookByName',
          {
            book: book,
            author: author,
          },
        )

        if (bookData.data.quantity <= 0) {
          speak({ text: 'book not available tap to speak author name' })
          navigate('/getAuthor')
        }

        // console.log(bookData.data)

        let pathData = await axios.get(
          `http://localhost:5000/book/getPath/${bookData.data.shelfName}`,
        )
        // pathData = pathData
        // console.log(pathData.data.path)
        dispatch(addPath(pathData.data.path))

        const issueData = await axios.put(
          'http://localhost:5000/book/decBook',
          {
            book: book,
            author: author,
          },
        )

        const update = await axios.put('http://localhost:5000/book/issueBook', {
          username: username,
          name: author,
          book_id: issueData._id,
        })

        // console.log(issueData)
        speak({
          text:
            'tap on right for next direction and left for previous direction',
        })
        navigate('/textToSpeech')
      } else {
        const userData = await axios.get(
          `http://localhost:5000/users/getuser/${username}`,
        )
        let flag = 0
        let id

        for (let i = 0; i < userData.data.books.length; i = i + 1) {
          if (userData.data.books[i].name === book) {
            console.log(userData.data.books[i])
            id = userData.data.books[i].book_id
            flag = 1
            break
          }
        }

        if (flag === 0) {
          speak({
            text:
              'You dont have this book please verify and tap to speak author',
          })
          navigate('/getAuthor')
        }
        const data = await axios.put('http://localhost:5000/book/incBook', {
          book: book,
          author: author,
        })

        const removeBook = await axios.put(
          'http://localhost:5000/book/removeBook',
          {
            username: username,
            name: author,
            book_id: id,
          },
        )

        speak({ type: 'Successfully returned book' })
        speak({ type: 'Tap to speak useType else close the application' })

        navigate('/getUseType')
      }
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
          )}
        </Box>
      ) : (
        <Box sx={{ height: '100%', width: '100%' }}>
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
                onClick={stopListenBook}
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
              Speak Name of your Book
              <KeyboardVoiceIcon />
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default GetBook
