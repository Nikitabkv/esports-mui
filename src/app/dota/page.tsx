import * as React from 'react';
import {Box} from '@mui/material';
import HomeGallery from "@/components/HomeGallery/HomeGallery";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const DotaPage = () => {
  return (
    <Box sx={MainBoxSx}>
      <HomeGallery/>
    </Box>
  );
}

export default DotaPage

