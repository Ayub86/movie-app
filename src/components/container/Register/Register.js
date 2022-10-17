import React from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { handleSubmit, control } = useForm();
const navigate = useNavigate()
  const onSubmit = (data) =>{
    console.log(data);
    axios.post("https://uploadmoviesapp.herokuapp.com/director/register", data)
    .then((response) => {
      console.log("---res", response);
      let message = response?.data?.message;
      //console.log(message);
      alert(`${message}`);
      //setIsloading(false);
     navigate("/login")


    }).catch((error) => {
      let message = error?.response?.data?.message;
      console.log(message);
      alert(`${message}`);
      //setIsloading(false);

    });
};
  
  return (
    <div className="form">
      <form>
        <Typography variant="h3" className="text-center">Register</Typography>
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
          name="phone_number"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Phone No"
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
