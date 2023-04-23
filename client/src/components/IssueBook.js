import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const IssueBook = () => {
  const check = [
    {
      name: 'lol',
    },
    {
      name: 'fuck',
    },
  ]
  const [name, setName] = useState('')
  const [book, setBook] = useState('')

  const handleSubmit = () => {
    console.log(name)
    console.log(book)

    setName('')
    setBook('')
  }
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: '10px',
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography> Type User Name:</Typography>

          <TextField
            fullWidth
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          >
            {name}
          </TextField>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography>Select Book</Typography>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={book}
            fullWidth
            label="Age"
            onChange={(e) => {
              setBook(e.target.value)
              console.log(e.target.value)
            }}
          >
            <MenuItem fullWidth value="">
              <em>None</em>
            </MenuItem>

            {check.map((data, key) => {
              return (
                <MenuItem key={key} value={data.name}>
                  {data.name}
                </MenuItem>
              )
            })}
          </Select>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly',
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Issue Book
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default IssueBook
