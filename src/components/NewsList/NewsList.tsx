import {Box, Divider, Stack, Typography} from '@mui/material';
import {FC} from 'react'
import {NewsListProps} from "@/components/NewsList/NewsList.interface";
import NewsListItem from "@/components/NewsListItem/NewsListItem";

const NewsList: FC<NewsListProps> = ({posts}) => {

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
          {posts.map((post) => {
            return (
              <Box key={post.id} p={{medium: 1, default: 2}} boxShadow={1} borderRadius={1}>
                <NewsListItem post={post}/>
              </Box>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}

export default NewsList
