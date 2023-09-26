import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import HomeGallery from "@/components/HomeGallery/HomeGallery"
import NewsList from "@/components/NewsList/NewsList"
import AsideCard from "@/components/AsideCard/AsideCard"
import {getPopularPosts, getPosts} from "@/lib/api/api"

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const HomePage = async () => {
  const posts = await getPosts();
  const popularPosts = await getPopularPosts()

  return (
    <Box sx={MainBoxSx}>
      <HomeGallery posts={posts.slice(0, 5)}/>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <NewsList posts={posts.slice(5, 25)}/>
        <Box display={'flex'} flexDirection={'column'} component='aside' flexBasis={352} flexShrink={5} gap={1} position={'sticky'} top={'8px'} height={'fit-content'}>
          <AsideCard posts={popularPosts} title={'Обсуждаемое'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomePage
