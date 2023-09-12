import * as React from 'react';
import {Box, Stack} from '@mui/material';
import NewsList from "@/components/NewsList/NewsList";
import AsideCard from "@/components/AsideCard/AsideCard";
import {getPosts} from "@/lib/api/api";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const DotaPage = async () => {
  const posts = await getPosts();

  return (
    <Box sx={MainBoxSx}>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <NewsList posts={posts}/>
        <Box component='aside' sx={{flexBasis: '352px'}}>
          <AsideCard posts={posts} title={'Поплуярные статьи'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default DotaPage

