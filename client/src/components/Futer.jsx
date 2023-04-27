import { Grid, Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Futer = () => {
  return (
    <Box bgcolor="#455a64" color={"whitesmoke"}  maxHeight={'1%'}
    px={{xs:1,sm:5}}
    py={{xs:10,sm:10}}>
      <Container  maxWidth="10%"> 
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
                <Link href='mailto:vanshika06bajpai@gmail.com' color={"inherit"}>
                    Contact
                </Link>
            </Box>
            <Box>
                <Link href='/' color={"inherit"}>
                    Support
                </Link>
            </Box>
            <Box>
                <Link href='/' color={"inherit"}>
                    Privacy
                </Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
                <Link href='/Login' color={"inherit"}>
                    Register
                </Link>
            </Box>
            <Box>
                <Link href='/Login' color={"inherit"}>
                    Login
                </Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help line</Box>
            <Box>
                <Typography>+91-8123456687</Typography>
            </Box>
            <Box>
                <Typography>+91-8123456687</Typography>
            </Box>
        </Grid>
      </Grid>
      <Box justifyContent={"center"} pt={{xs: 10,sm: 10}} pb={{xs: 5,sm: 0}}>
        &reg; Copyright {new Date().getFullYear()} InsideGuide.All rights reserved.Made in India
      </Box>
      </Container>
    </Box>
  )
}

export default Futer
