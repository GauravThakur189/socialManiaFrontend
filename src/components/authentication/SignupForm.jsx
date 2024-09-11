import { Email, Password } from "@mui/icons-material";
import { Button,Grid, Grid2, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik, yupToFormErrors } from "formik";
import React from "react";
import * as yup from "yup";


const currentYear = new Date().getFullYear();
const years = Array.from({length:100},(_,i)=>currentYear-i)
const days = Array.from({length:31},(_,i)=>i+1)
const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },

]

const SignupForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup.string().required("password is required"),

  });

  const formik = useFormik({
    initialValues: {
        fullName:"",
      email: "",
      password: "",
      dateOfBirth:{
        day:'',
        month:'',
        year:'',
      }
    },
    validationSchema,
    onSubmit: (values) => {
        const { day,month,year} = values.dateOfBirth
        const dateOfBirth = `${year}-${month}-${day}`
        values.dateOfBirth= dateOfBirth
      console.log("form value ", values);
    },
  });

  const handleDateChange = (name)=>(event)=>{
    formik.setFieldValue("dateOfBirth",{
        ...formik.values.dateOfBirth,
        [name]:event.target.value,
    })
  }


  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <TextField
            fullWidth
            label="full name"
            name="fullName"
            variant="outlined"
            size="large"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
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
        <Grid item xs={4}>
        <InputLabel>Date</InputLabel>
        <Select name="day" 
        fullWidth
        onChange={handleDateChange("day")}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth.day}>
            {days.map((day)=>
            <MenuItem key={day} value={day}>
            {day}</MenuItem>
            )}
        </Select>
        </Grid>
        <Grid item xs={4}>
        <InputLabel>Month</InputLabel>
        <Select name="month" 
        fullWidth
        onChange={handleDateChange("month")}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth.month}>
            {months.map((month)=>
            <MenuItem key={month.label} value={month.value}>
            {month.label}</MenuItem>
            )}
        </Select>
        </Grid>
        <Grid item xs={4}>
        <InputLabel>Year</InputLabel>
        <Select name="year" 
        fullWidth
        onChange={handleDateChange("year")}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth.year}>
            {years.map((year)=>
            <MenuItem key={year} value={year}>
            {year}</MenuItem>
            )}
        </Select>
        </Grid>
        <Grid className=" mt-20" item xs={12}>
            <Button sx={{borderRadius:"29", py:"15px" , bgcolor: blue[500]}} 
            type="submit" 
            fullWidth 
            variant="contained"
            size="large"
            >SignUp</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
