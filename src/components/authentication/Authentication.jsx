// import { Button,Grid, Grid2 } from '@mui/material'
// import { GoogleLogin } from '@react-oauth/google'
// import React from 'react'
// import AuthModal from './AuthModel'

// const Authentication = () => {
//   const [openAuthModel, setOpenAuthModel] = React.useState(false)
//   const handleOpenAuthModel = () => setOpenAuthModel(true)
//   const handleCloseAuthModel = () => setOpenAuthModel(false)

//   return (
//     <div>
//       <Grid className='overflow-y-hidden' container>

//       <Grid className='hidden lg:block' item lg={7}>
//       <img className='w-full h-screen' src="https://www.netzwerk-medienethik.de/wp-content/uploads/2012/05/sociialman.png" 
//       alt=''/>
//          {/* place for using logo if we want */}
//       </Grid>
//         <Grid className=" px-10 " lg={5} xs={12}>
//           <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>
//           <h1 className=' font-bold text-3xl py-16'>Join Twitter Today</h1>
          
//           <div className=' w-[60%]'>
          
//           <div className='w-full'>
//             <GoogleLogin width={330}/>
//             <p className=' py-5 text-center'>OR</p>
//             <Button  onClick={handleOpenAuthModel}
//             fullWidth  variant="contained" size='large' sx={{
//               borderRadius:"29px",
//               py:"7px",

//             }}> Create Account</Button>
//             <p className='text-sm mt-2'>By signing up, you agree to the terms of Service and Privacy, including Cookies Use</p>
//           </div>
//           <div className=' mt-10'>
//           <h1 className=' font-bold text-xl mb-5'>Already have Account?</h1>
//           <Button onClick={handleOpenAuthModel}
//            fullWidth varient="outlined" size='large' sx={{
//               borderRadius:"29px",
//               py:"7px",

//             }}> Login</Button>
//           </div>
 
//           </div>
//         </Grid>
//       </Grid>
//       <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel}/>
//     </div>
//   )
// }

// export default Authentication


import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModel'; // assuming AuthModal is in the same folder
//import GoogleLogin from './GoogleLogin'; // assuming you have this component
import { Grid, Button } from '@mui/material'; // using MUI as in your example
import { GoogleLogin } from '@react-oauth/google'

const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const navigate = useNavigate(); // use useNavigate for routing

  const handleOpenSignup = () => {
    navigate('/signup'); // navigate to signup route
    setOpenAuthModal(true);
  };

  const handleOpenSignin = () => {
    navigate('/signin'); // navigate to signin route
    setOpenAuthModal(true);
  };

  const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block' item lg={7}>
          <img className='w-full h-screen' src="https://www.netzwerk-medienethik.de/wp-content/uploads/2012/05/sociialman.png" alt='' />
        </Grid>

        <Grid className="px-10" lg={5} xs={12}>
          <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>
          <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>
          
          <div className='w-[60%]'>
            <div className='w-full'>
              <GoogleLogin width={330} />
              <p className='py-5 text-center'>OR</p>
              <Button
                onClick={handleOpenSignup} // Open signup modal
                fullWidth
                variant="contained"
                size='large'
                sx={{ borderRadius: "29px", py: "7px" }}>
                Create Account
              </Button>
              <p className='text-sm mt-2'>
                By signing up, you agree to the terms of Service and Privacy, including Cookies Use
              </p>
            </div>
            <div className='mt-10'>
              <h1 className='font-bold text-xl mb-5'>Already have an account?</h1>
              <Button
                onClick={handleOpenSignin} // Open signin modal
                fullWidth
                variant="outlined"
                size='large'
                sx={{ borderRadius: "29px", py: "7px" }}>
                Login
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  );
};

export default Authentication;
