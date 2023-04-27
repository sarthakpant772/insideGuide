import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import login from '../images/login.jpg'
import Navbar from './Navbar'
import lib from './static/lib.jpg'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('sarthak.pant31@gmail.com')
  const [password, setPassword] = useState('123')
  const navigate = useNavigate()
  const handleSubmit = async () => {
    console.log(email)
    console.log(password)
    try {
      const res = await axios.post('http://localhost:5000/users/signin', {
        username: email,
        password,
      })
      localStorage.setItem('token', res.data.token)
      console.log(res.data.token)
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Paper
          sx={{
            width: '70%',
            height: '60vh',
            backgroundColor: 'primary.light',
            borderRadius: '20px',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: '50%',
              height: '100%',
            }}
          >
            <Box
              componenr="img"
              sx={{ width: '100%', height: '100%' }}
              image={lib}
            />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '50%' },
              height: '100%',
              display: 'felx',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderRadius: '20px',
              backgroundColor: '#ffff',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '20%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3">Login</Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <TextField
                id="email"
                label="username"
                variant="filled"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <TextField
                id="Password"
                label="Password"
                variant="filled"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '20%',
                display: 'flex',
                // padding: '%',
                flexDirection: 'row-reverse',
              }}
            >
              <Button
                sx={{ marginRight: '10%' }}
                varient="filled"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}

export default Login
