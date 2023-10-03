import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'

const CsgoPage = () => {
    return (
        <Box>
          <Box boxShadow={1} borderRadius={1} p={2} mb={1}>
            <Typography fontSize={{medium: 24, default: 36}} color={'mainColors.base'} fontWeight={800} variant='h1'>
                {'Контакты:'}
            </Typography>
          </Box>

          <Box boxShadow={1} borderRadius={1} p={2} mb={1}>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
             <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={800} variant='h2'>
              {'Реклама:'}
            </Typography>
              <Typography color={'mainColors.base'} component='a' href='mailto:ads@esports-24.ru' sx={{textDecoration: 'none'}}>
              ads@esports-24.ru
            </Typography>
            </Stack>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
              <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={800} variant='h2'>
               {'Остальные вопросы:'}
              </Typography>
              <Typography color={'mainColors.base'} component='a' href='mailto:contact@esports-24.ru' sx={{textDecoration: 'none'}}>
              contact@esports-24.ru
            </Typography>
            </Stack>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
              <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={800} variant='h2'>
                {'Дискорд:'}
              </Typography>
              <Typography color={'mainColors.base'}>
                Ernie#5851
              </Typography>
            </Stack>
          </Box>

          <Box boxShadow={1} borderRadius={1} p={2} mb={1}>
            <Typography fontSize={{medium: 24, default: 36}} color={'mainColors.base'} fontWeight={800} variant='h1'>
              {'Социальные сети:'}
            </Typography>
          </Box>

          <Box height={'54vh'} boxShadow={1} borderRadius={1} p={2} mb={1}>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
              <MusicNoteRoundedIcon />
              <Typography fontSize={{medium: 16, default: 20}}
                          color={'primary.contrastText'}
                          fontWeight={800}
                          component='a'
                          href='https://www.tiktok.com/@esports_24.ru'
                          target='_blank'
                          rel='nofollow'
                          sx={{textDecoration: 'none'}}
              >
                {'TikTok'}
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
              <GroupRoundedIcon />
              <Typography fontSize={{medium: 16, default: 20}}
                          color={'primary.contrastText'}
                          fontWeight={800}
                          component='a'
                          href='https://vk.com/esports24ru'
                          target='_blank'
                          rel='nofollow'
                          sx={{textDecoration: 'none'}}
              >
                {'Vkontakte'}
              </Typography>
            </Stack>
            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} gap={1}>
              <ArticleRoundedIcon />
              <Typography fontSize={{medium: 16, default: 20}}
                          color={'primary.contrastText'}
                          fontWeight={800}
                          component='a'
                          href='https://zen.yandex.ru/id/5fc0c00e8e3492110a764d4d'
                          target='_blank'
                          rel='nofollow'
                          sx={{textDecoration: 'none'}}
              >
                {'Dzen'}
              </Typography>
            </Stack>
          </Box>
        </Box>
    );
}

export default CsgoPage
