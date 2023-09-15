import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Link from '@mui/material/Link'
import SvgIcon from '@mui/material/SvgIcon'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Image from "next/image";
import Logo from "/public/test/logo.svg"

const pages = [
  {
    title: 'Новости',
    link: '/'
  },
  {
    title: 'Dota 2',
    link: '/dota'
  },
  {
    title: 'CS:GO',
    link: '/csgo'
  },
  {
    title: 'CFG Игроков',
    link: '/404'
  },
  {
    title: 'Прогнозы',
    link: '/404'
  }
]

const AppBarSx = {
  zIndex: 2000,
  marginBottom: 1,
  bgcolor: 'primary.light',
  flexDirection: 'row',
  justifyContent: 'center',
}
const ToolBarSx = {
  justifyContent: 'space-between',
  flexBasis: '1440px',
  px: '24px',
}
const ButtonSx = {
  color: 'black',
  ':hover': {
    bgcolor: 'buttons.hover',
    color: 'white',
  }
}

const Header = () => {
  return (
    <AppBar position="static" sx={AppBarSx}>
      <Toolbar sx={ToolBarSx}>

        {/* Мобильное меню */}
        <Accordion sx={{boxShadow: 0, display: {medium: 'block', default: 'none'}}}>

          <Stack direction='row' alignItems='center'>
            <AccordionSummary sx={{margin: 0}} expandIcon={<MenuIcon />}/>
            <Link flexBasis={156} height={27} href={'/'} sx={{
              display: {medium: 'block', default: 'none'}
            }}>
              <Image src={Logo} alt={'logo'} />
            </Link>
          </Stack>

          <AccordionDetails>
            <List>
              {pages.map((item) => (
                <Link key={item.title} href={item.link} underline='none'>
                  <ListItem>
                    <Typography color='primary.contrastText' noWrap>
                      {item.title}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>

        </Accordion>

        {/*Логотип */}
        <Link flexBasis={156} height={37.15} href={'/'} sx={{
          border: '1px solid rgba(234, 234, 234, 0.5);',
          borderRadius: '8px',
          paddingX: '15px',
          paddingY: '5px',
          display: {medium: 'none', default: 'block'}
        }}>
          <Image src={Logo} alt={'logo'} />
        </Link>

        {/*Меню*/}
        <Box flexGrow={1} display={{medium: 'none', default: 'flex'}} justifyContent='flex-end'>
          <ButtonGroup variant="outlined" component="nav">
            {pages.map((page) => {
              return (
                <Button component="a" key={page.title} sx={ButtonSx} href={page.link} startIcon={
                  <SvgIcon color="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                      <path
                        d="M46,8V6c0-0.552-0.447-1-1-1h-4c-0.396,0-0.714,0.026-1,0.1V5c0-0.552-0.447-1-1-1h-6c-1.734,0-2.361,0.984-2.729,2h-0.812 C29.226,5.689,29,5.286,29,5c0-0.552-0.447-1-1-1h-7c-0.511,0-0.94,0.393-0.995,0.9C19.982,5.11,19.557,6,18.896,6h-2.74 c-0.065-0.077-0.159-0.22-0.24-0.403C15.756,5.234,15.396,5,15,5H5C4.447,5,4,5.448,4,6v8c0,2.823,0.825,6.397,0.999,7.118 l-0.008,1.515l-0.678,0.641C4.113,23.462,4,23.725,4,24v4c0,0.266,0.105,0.52,0.293,0.707L5,29.414v4.424l-0.948,2.846 c-0.061,0.181-0.068,0.374-0.021,0.559l0.929,3.718l-0.907,2.724c-0.103,0.305-0.051,0.641,0.137,0.901C4.377,44.846,4.679,45,5,45 h14c0.266,0,0.52-0.105,0.707-0.293l0.09-0.09C20.328,45.343,21.067,46,22,46h3c0.736,0,1.38-0.321,1.947-0.605 C27.335,45.2,27.736,45,28,45h5c0.266,0,0.52-0.105,0.707-0.293l0.243-0.243c0.063,0.08,0.123,0.159,0.182,0.235 C34.623,45.339,35.13,46,36,46h5c0.553,0,1-0.447,1-1v-0.719l2.758,0.688c0.299,0.077,0.616,0.007,0.86-0.184 c0.243-0.19,0.384-0.483,0.382-0.793c-0.001-0.098-0.063-9.91,0-14.98c0.003-0.27-0.103-0.529-0.293-0.72L45,27.586V23 c0-0.265-0.105-0.52-0.293-0.707l-0.49-0.49l0.605-1.21l0.885-0.885C45.895,19.52,46,19.265,46,19l-0.015-5.01 c0-0.081-0.01-0.161-0.029-0.24l-0.896-3.632l0.835-1.67C45.964,8.309,46,8.155,46,8z M34.089,12l3.044,2l-1.015,6L28,14L34.089,12z M15,38l-4-3l2-7l8,8L15,38z M36.2,37h-4.667L11,12.926L14.733,12L39,30.518L36.2,37z"/>
                    </svg>
                  </SvgIcon>
                }>
                  <Typography noWrap>
                    {page.title}
                  </Typography>
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header
