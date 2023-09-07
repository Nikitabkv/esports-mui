import * as React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HomeNewsList from "@/components/HomeNewsList/HomeNewsList";
import AsideCard from "@/components/AsideCard/AsideCard";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const DotaPage = () => {
  return (
    <Box sx={MainBoxSx}>
        <Stack direction="row" spacing={1}>
            <HomeNewsList/>
            <Box component='aside' sx={{flexBasis: '352px'}}>
                <AsideCard title={'Поплуярные статьи'}/>
            </Box>
        </Stack>
    </Box>
  );
}

export default DotaPage

