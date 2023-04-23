import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People'
import BookIcon from '@mui/icons-material/Book'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import WarehouseIcon from '@mui/icons-material/Warehouse'
const SearchUser = () => {
  const [number, setNumber] = useState(0)
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: '100%',
        height: { sm: '90vh' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: { xs: 'space-evenly' },
      }}
    >
      <Box
        sx={{
          marginTop: { xs: '20px', sm: 0 },
          width: { xs: '90%', sm: '80%' },
          height: { xs: '50em', sm: '30%' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Paper
          sx={{
            height: { xs: '15em', sm: '100%' },
            width: { xs: '100%', sm: '25%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <PeopleIcon fontSize="large" />
            <Typography variant="h4">Number of User</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h3">{number}</Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            height: { xs: '15em', sm: '100%' },
            width: { xs: '100%', sm: '25%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <BookIcon fontSize="large" />
            <Typography variant="h4">Issue New Book</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              fontSize="large"
              onClick={() => navigate('/admin/checkUser/book')}
            >
              <AddCircleOutlineIcon fontSize="large" />
            </Button>
          </Box>
        </Paper>
        <Paper
          sx={{
            height: { xs: '15em', sm: '100%' },
            width: { xs: '100%', sm: '25%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <WarehouseIcon fontSize="large" />
            <Typography variant="h4">UserDetails</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button onClick={() => navigate('/admin/checkUser/user')}>
              <AddCircleOutlineIcon fontSize="large" />
            </Button>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: '100%', height: '40%' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default SearchUser
