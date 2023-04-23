import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const AddNewBooks = () => {
  const check = [
    {
      name: 'sarthak',
    },
    { name: 'aastha' },
  ]

  const [author, setAuthor] = React.useState('')
  const [book, setBook] = useState('')
  const [shelf, setShelf] = useState('')
  return (
    <Box
      sx={{
        height: { sm: '90%' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '90%', display: 'flex' }}>
        <Typography variant="h5">Add book</Typography>
      </Box>
      <Box
        sx={{
          height: '90%',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box>
          <Typography>Select Author</Typography>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={author}
            fullWidth
            label="Author"
            onChange={(e) => {
              setAuthor(e.target.value)
              console.log(e.target.value)
            }}
          >
            <MenuItem value="">
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
        <Box>
          <Typography>Enter Book Name:</Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Author"
            variant="outlined"
            onChange={(e) => setBook(e.target.value)}
          >
            {book}
          </TextField>
        </Box>
        <Box>
          <Typography>Select Shelf</Typography>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={shelf}
            fullWidth
            label="Age"
            onChange={(e) => {
              setShelf(e.target.value)
              console.log(e.target.value)
            }}
          >
            <MenuItem value="">
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
          sx={{ width: '100%', display: 'flex', justifyContent: 'row-reverse' }}
        >
          <Button size="large" variant="outlined">
            Add Book
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AddNewBooks
