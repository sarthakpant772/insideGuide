import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import LibraryNav from './LibraryNav'
import { Outlet } from 'react-router-dom'
const Library = () => {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <LibraryNav />
      <Outlet />
    </Box>
  )
}

export default Library
