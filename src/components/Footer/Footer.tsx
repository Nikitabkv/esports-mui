import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from "@mui/material/Link"


const Footer = () => {
  return (
    <Box bgcolor='primary.light' boxShadow={5} mt={1} component='footer' display='flex' alignItems='center'
         justifyContent='center' height={80}>
      <Stack direction='column' alignItems='flex-end' flexBasis={1440} px={4}>
        <Box>18+</Box>
        <Stack direction='row' spacing={2}>
          <Link href='/about' color='primary.contrastText' underline='none'>О нас</Link>
          <Link href='/contact' color='primary.contrastText' underline='none'>Контакты</Link>
          <Typography>©️ Esports-24.ru</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
