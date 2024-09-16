

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SigninForm from './SignupForm';
import SignupForm from './SigninForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: 'null',
  boxShadow: 24,
  p: 4,
  borderRadius:2,
  outline:"none"
};

// export default function AuthModal({open,handleClose}) {


// const location = useLocation()
// const navigate = useNavigate();
// const handleNavigate = ()=>{
//    const path =  location.pathname==="/signup" ? "/signin" : "/signup"
//    navigate(path)
// }

//   return (
//     <div>
      
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <h1 className=' text-center font-bold text-3xl pb-20'>
//             Create your Account
//           </h1>
           
//           {location.pathname==="/signup" ? <SigninForm/> : <SignupForm/>}
//           <h1 className=' text-center py-5 font-semibold text-lg text-gray-500'>
//              {location.pathname==="/signin" ? "already have account" : "If you don't have account"}
//           </h1>
//           <Button fullWidth variant='outlined' 
//           onClick={handleNavigate}
//           sx={{borderRadius:"29px", py:"15px"}}>
//           {location.pathname==="/signup" ? "signin" : "signup"}
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

export default function AuthModal({ open, handleClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle between signup and signin pages
  const handleNavigate = () => {
    const path = location.pathname.includes("/signup") ? "/signin" : "/signup";
    navigate(path);
  };

  // Determine if current path is signup or signin to show the right form
  const isSignup = location.pathname.includes("/signin");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-center font-bold text-3xl pb-20">
            {isSignup ? "Create your Account" : "Sign In to Your Account"}
          </h1>

          {/* Render SignupForm if it's signup path, otherwise SigninForm */}
          {isSignup ? <SignupForm /> : <SigninForm />}

          <h1 className="text-center py-5 font-semibold text-lg text-gray-500">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </h1>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleNavigate}
            sx={{ borderRadius: "29px", py: "15px" }}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
