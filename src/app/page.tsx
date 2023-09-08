import * as React from 'react';
import {Box, Stack} from '@mui/material';
import HomeGallery from "@/components/HomeGallery/HomeGallery";
import HomeNewsList from "@/components/HomeNewsList/HomeNewsList";
import AsideCard from "@/components/AsideCard/AsideCard";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const HomePage = () => {
  return (
    <Box sx={MainBoxSx}>
      <HomeGallery/>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <HomeNewsList/>
        <Box component='aside' sx={{flexBasis: '352px'}}>
          <AsideCard title={'Поплуярные статьи'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomePage
