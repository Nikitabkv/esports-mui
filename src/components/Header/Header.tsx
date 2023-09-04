import Link from 'next/link'
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{bgcolor: 'primary.light'}} >
        <Box display={{
          xs: 'flex',
          md: 'none'
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" noWrap component="div">
          Next.js App Router
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
