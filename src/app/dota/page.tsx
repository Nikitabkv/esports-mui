import * as React from 'react';
import {Box, Stack} from '@mui/material';
import NewsList from "@/components/NewsList/NewsList";
import AsideCard from "@/components/AsideCard/AsideCard";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const DotaPage = () => {
  return (
    <Box sx={MainBoxSx}>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <NewsList/>
        <Box component='aside' sx={{flexBasis: '352px'}}>
          <AsideCard title={'Поплуярные статьи'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default DotaPage

