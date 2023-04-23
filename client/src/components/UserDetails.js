import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const UserDetails = () => {
  const [name, setname] = useState()
  const details = [
    {
      name: 'lola',
      author: 'sarthak',
    },
    {
      name: 'savage',
      author: 'aastha',
    },
  ]
  return (
    <Box
      sx={{
        width: '100%',
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
      }}
    >
      <Box
        sx={{
          padding: '10px',
          width: '100%',
          display: 'flex',
          //   flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            padding: '10px',
            width: '80%',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            onChange={(e) => setname(e.target.value)}
          >
            {name}
          </TextField>
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: '80%',
          height: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '20px',
            backgroundColor: 'primary.light',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '20px',
              display: 'flex',
              marginLeft: '10px',
            }}
          >
            <Typography>Author</Typography>
          </Box>
          <Box
            sx={{
              width: '50%',
              height: '20px',
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '10px',
            }}
          >
            <Typography>Book Name</Typography>
          </Box>
        </Box>
        {details.map((data, key) => (
          <Box
            key={key}
            sx={{
              marginTop: '10px',
              width: '100%',
              height: '20px',
              backgroundColor: 'primary.dark',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '50%',
                height: '20px',
                display: 'flex',
                marginLeft: '10px',
                alignItems: 'center',
              }}
            >
              <Typography>{data.author}</Typography>
            </Box>
            <Box
              sx={{
                width: '50%',
                height: '20px',
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '10px',
                alignItems: 'center',
              }}
            >
              <Typography>{data.name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default UserDetails
