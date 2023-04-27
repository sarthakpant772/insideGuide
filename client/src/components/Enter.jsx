import { Box } from '@mui/system'
import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, InputBase, Stack, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from 'styled-components';
import MicIcon from '@mui/icons-material/Mic';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StopIcon from '@mui/icons-material/Stop';
import SpeechToText from './SpeechToText';
import { Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.30),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.50),
    },
    marginRight: theme.spacing(2),
    marginLeft: 30,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '80%',
      position: 'relative'
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Enter = () => {
  return (
    <div>
    <Box justifyContent="space-evenly" flex={2} p={2} sx={{border:2}} color="#e0e0e0">
        <Stack direction="row" spacing={12} justifyContent="center">
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ display:'flex'}}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <h3>
          Press to Enter Book and Author Name!
          </h3>
          </Typography>
        </CardContent>
        <Box
        sx={{ display: 'flex', alignItems: 'center', pl: 10, pb:1 }}>
        <Button href='\library'
        aria-label="button" 
        size='large'>
            Go To the Mic page<MicIcon/>
          </Button>
        </Box>
      </Box>
    </Card>
</Stack>
    </Box>
    </div>
  )
}

export default Enter
