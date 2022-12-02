
import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
  return (
    <Box sx={{ display: 'flex' , justifyContent:"center", overflowY: "hidden", marginTop: "15%"}}>
        <CircularProgress color="warning"/>
    </Box>
  );
}


