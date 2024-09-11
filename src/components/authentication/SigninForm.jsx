import { Email, Password } from "@mui/icons-material";
import { Button, Grid2, TextField } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import * as yup from "yup";

const SigninForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("form value ", values);
    },
  });

  return (
    <form>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
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
        </Grid2>
        <Grid2 item xs={12}>
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
        </Grid2>
        <Grid2 className=" mt-20" item xs={12}>
            <Button sx={{borderRadius:"29", py:"15px" , bgcolor:"blue[500]"}} 
            type="submit" 
            fullWidth 
            variant="contained"
            size="large"
            >Sign In</Button>
        </Grid2>
      </Grid2>
    </form>
  );
};

export default SigninForm;
