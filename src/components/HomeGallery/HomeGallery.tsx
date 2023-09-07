import {Box} from "@mui/material";
import HomeGalleryItem from "@/components/HomeGallery/HomeGalleryItem/HomeGalleryItem";

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

const HomeGallery = () => {
  return (
    <Box mb={1} p={2} boxShadow={1} borderRadius={1}>
      <Box sx={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateAreas: `'big small1 small2'
                            'big small3 small4'`
      }}>
        {gallery.map((item, index) => (<HomeGalleryItem key={item.title} item={item} index={index}/>))}
      </Box>
    </Box>
  )
}

export default HomeGallery
