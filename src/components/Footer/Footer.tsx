import {Box, Stack, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box bgcolor='primary.light' boxShadow={5} mt={1} component='footer' display='flex' alignItems='center'
         justifyContent='center' height={80}>
      <Stack direction='column' alignItems='flex-end' flexBasis={1440} px={4}>
        <Box>18+</Box>
        <Stack direction='row' spacing={2}>
          <Typography>О нас</Typography>
          <Typography>Документы</Typography>
          <Typography>©️ Esports-24.ru</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
