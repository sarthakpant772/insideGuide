import { Card, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import aastha from "./static/aastha.jpg"

const Banner = () => {
  return (
    <div>
      <Card><CardMedia 
       component="img"
        height="400"
        image={aastha}
        alt="Paella dish"
        text="????"
      /></Card>
    </div>
  )
}

export default Banner
