import * as React from 'react';
import {Box} from '@mui/material';
import NewsList from "@/components/NewsList/NewsList";

const MainBoxSx = {
  display: 'flex',
  flexDirection: 'column',
}

const CsgoPage = () => {
  return (
    <Box sx={MainBoxSx}>
      <NewsList/>
    </Box>
  );
}

export default CsgoPage
