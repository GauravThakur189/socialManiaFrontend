import { Button,Grid, Grid2, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from "yup";
import { loginUser } from '../../store/Action';


const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup.string().required("password is required"),
  });

const SigninForm = () => {

  const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema,
        onSubmit: (values) => {
         dispatch(loginUser(values))
          console.log("form value ", values);
          
        },
      });

  return (
    <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="email"
          name="email"
          variant="outlined"
          size="large"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="password"
          name="password"
          variant="outlined"
          size="large"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Grid>
      <Grid className=" mt-20" item xs={12}>
          <Button sx={{borderRadius:"29", py:"15px" , bgcolor: blue[500]}} 
          type="submit" 
          fullWidth 
          variant="contained"
          size="large"
          >Sign In</Button>
      </Grid>
    </Grid>
  </form>
  )
}

export default SigninForm