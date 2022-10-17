import React from "react";
import { Typography, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.css"
import axios from "axios";
const Register = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) =>{
    axios.post("https://whipz.herokuapp.com/api/v1/user/signup", data)
    .then((response) => {
      console.log("---res", response);
      let message = response?.data?.message;
      //console.log(message);
      alert(`${message}`);
      //setIsloading(false);
     // navigate("/login")

  const onSubmit = (data) => {
    console.log(data);
    // axios
    //   .post("https://uploadmoviesapp.herokuapp.com/director/register", data)
    //   .then((response) => {
    //     console.log("---register", response);
    //     let message = response?.data?.message;
    //     //console.log(message);
    //     alert(`${message}`);
    //     //setIsloading(false);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     let message = error?.response?.data?.message;
    //     console.log(message);
    //     alert(`${message}`);
    //     //setIsloading(false);
    //   });
  }

  return (
    <>
  
  <div className="form shadow-lg p-3 mb-5 bg-white rounded">
        <form>
          <Typography variant="h6" className="text-center">
            Please Enter E-Mail
          </Typography>
          <div className="col mt-4">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="E-Mail"
              variant="outlined"
              value={value}
              onChange={onChange}
              fullWidth={true}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Pass Required" }}
        />
        </div>
        <div className="col mt-4">
         <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="outlined"
              value={value}
              fullWidth={true}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Password Required" }}
        />
        </div>
       
        <div className="col mt-4">
         <Controller
          name="confirm_password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Confirm Password"
              variant="outlined"
              value={value}
              fullWidth={true}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Password required" }}
        />
        </div>
        <div className="d-flex justify-content-center mt-4">

        
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>
      
      </form>
    </div>
  );
};

export default Register;
