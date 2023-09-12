import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import HomeGallery from "@/components/HomeGallery/HomeGallery"
import NewsList from "@/components/NewsList/NewsList"
import AsideCard from "@/components/AsideCard/AsideCard"
import {getPosts} from "@/lib/api/api"

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <Box sx={MainBoxSx}>
      <HomeGallery posts={posts.slice(0, 5)}/>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <NewsList posts={posts.slice(5)}/>
        <Box display={{medium: 'none', default: 'flex'}} component='aside' sx={{flexBasis: '352px'}}>
          <AsideCard posts={posts.slice(0, 10)} title={'Титл другой какой-то'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomePage
