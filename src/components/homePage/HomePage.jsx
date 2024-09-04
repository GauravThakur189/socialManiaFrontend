import { Grid } from '@mui/material';  

import React from 'react'
import Navigation from '../navigation/Navigation';
import HomeSection from '../homeSection/HomeSection';
import RightPart from '../rightPart/RightPart';

const HomePage = () => {
  return (
   <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
   <Grid item xs={0} lg={2.5} className='  px-5 lg:px-9 hidden lg:block w-full relative'> 
   <Navigation/>
   </Grid>
  
  
   <Grid item xs={0} lg={6} className=' px-5 lg:px-9 hidden lg:block w-full relative'>
   <HomeSection/>
   </Grid>
   <Grid item xs={0} lg={3} className=' px-5 lg:px-9 hidden lg:block w-full relative'>
   <RightPart/>
   </Grid>

   </Grid>
  )
}

export default HomePage