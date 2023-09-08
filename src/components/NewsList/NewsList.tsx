import {Box, Divider, Stack, Typography} from '@mui/material';
import NewsListItem from "@/components/NewsListItem/NewsListItem";

const gallery = [
  {
    title: 'Chuvash пропустит ESL One Berlin Major 2023',
    category: 'Dota 2',
    imagePath: '/test/main-page-img/4.jpg',
    date: '22.04.2023',
    content: 'Лидер команды OG по Dota 2 Евгений Chuvash Макаров заявил, что не полетит с командой на ESL One Berlin Major 2023 в связи возникших проблем с визой. Источник: YouTube-канал KD...',
    path: '/'
  },
  {
    title: 'Gladiators стали чемпионами The Lima Major 2023',
    category: 'CS:GO',
    imagePath: '/test/main-page-img/1.jpg',
    date: '8.04.2023',
    content: 'Gladiators обыграли Team Liquid в финальном матче в рамках The Lima Major 2023 по Dota 2. По её итогам, команда Антона dyrachyo Шкредова заняла первое место и стала чемпионом турнира. В...',
    path: '/dota'
  },
  {
    title: 'Завершился первый сезон DPC по Dota 2 в Восточной Европе',
    category: 'Dota 2',
    imagePath: '/test/main-page-img/2.webp',
    date: '14.01.2023',
    content: 'Итоги первого DPC в Восточной Европе для российских болельщиков неутешительны  30 января закончился первый DPC сезон по Dota 2 в Восточной Европе. Определились участники предстоящего...',
    path: '/'
  },
  {
    title: 'Daxak официально покинул команду HellRaisers',
    category: 'CS:GO',
    imagePath: '/test/main-page-img/3.webp',
    date: '13.12.2022',
    content: 'Киберспортивная организация HellRaisers подтвердила, что керри игрок их команды Никита Daxak Кузьмин покинул состав по Dota 2. Информация появилась в Telegram. Кто станет новым игроком команды неизвестно',
    path: '/'
  },
  {
    title: 'NIP подписала бывшего игрока Natus Vincere Junior Headtr1ck',
    category: 'Dota 2',
    imagePath: '/test/main-page-img/5.webp',
    date: '31.11.2022',
    content: 'Организация Ninjas in Pyjamas официально подписала нового снайпера в состав по CS:GO. Им стал бывшей участник Natus Vincere Junior Даниила headtr1ck Валитова. Информация появилась в социальных сетях команды. В...',
    path: '/'
  },
  {
    title: 'Gladiators стали чемпионами The Lima Major 2023',
    category: 'CS:GO',
    imagePath: '/test/main-page-img/1.jpg',
    date: '8.04.2023',
    content: 'Gladiators обыграли Team Liquid в финальном матче в рамках The Lima Major 2023 по Dota 2. По её итогам, команда Антона dyrachyo Шкредова заняла первое место и стала чемпионом турнира. В...',
    path: '/'
  },
  {
    title: 'Завершился первый сезон DPC по Dota 2 в Восточной Европе',
    category: 'Dota 2',
    imagePath: '/test/main-page-img/2.webp',
    date: '14.01.2023',
    content: 'Итоги первого DPC в Восточной Европе для российских болельщиков неутешительны  30 января закончился первый DPC сезон по Dota 2 в Восточной Европе. Определились участники предстоящего...',
    path: '/'
  },
  {
    title: 'Daxak официально покинул команду HellRaisers',
    category: 'CS:GO',
    imagePath: '/test/main-page-img/3.webp',
    date: '13.12.2022',
    content: 'Киберспортивная организация HellRaisers подтвердила, что керри игрок их команды Никита Daxak Кузьмин покинул состав по Dota 2. Информация появилась в Telegram. Кто станет новым игроком команды неизвестно',
    path: '/'
  },
  {
    title: 'NIP подписала бывшего игрока Natus Vincere Junior Headtr1ck',
    category: 'Dota 2',
    imagePath: '/test/main-page-img/5.webp',
    date: '31.11.2022',
    content: 'Организация Ninjas in Pyjamas официально подписала нового снайпера в состав по CS:GO. Им стал бывшей участник Natus Vincere Junior Даниила headtr1ck Валитова. Информация появилась в социальных сетях команды. В...',
    path: '/'
  }
]

const NewsList = () => {
  return (
    <Box sx={{
      flexBasis: {
        medium: 'auto',
        default: '1034px'
      }
    }}>
      <Stack spacing={1}>
        <Divider textAlign='left' sx={{'&:before': {width: '3%'}}}>
          <Typography fontWeight={600} fontSize={{medium: 12, default: 14}} color='#ff3535'>НОВОСТИ</Typography>
        </Divider>
        <Stack spacing={1}>
          {gallery.map((item) => {
            return (
              <Box key={item.title} p={{medium: 1, default: 2}} boxShadow={1} borderRadius={1}>
                <NewsListItem item={item}/>
              </Box>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}

export default NewsList
