import * as React from 'react';
import {Box, Typography} from '@mui/material';
import HomeGallery from "@/components/HomeGallery/HomeGallery";
import HomeNewsList from "@/components/HomeNewsList/HomeNewsList";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const DotaPage = () => {
  return (
    <Box sx={MainBoxSx}>
      <HomeGallery/>
      <Typography variant='h2' color='#ff3535'>
        Тестик
      </Typography>
      <HomeNewsList />
    </Box>
  );
}

export default DotaPage

