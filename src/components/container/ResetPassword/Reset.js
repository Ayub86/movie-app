import React from 'react'
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.css"
import axios from "axios";

const ResetPassword = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) =>{
    axios.post("https://whipz.herokuapp.com/api/v1/user/reset-password", data)
    .then((response) => {
      console.log("---res", response);
      let message = response?.data?.message;
      //console.log(message);
      alert(`${message}`);
      //setIsloading(false);
     // navigate("/login")


    }).catch((error) => {
      let message = error?.response?.data?.message;
      console.log(message);
      alert(`${message}`);
      //setIsloading(false);

    });
  };
  return (
    <>

      <div className="form">
    <form>
      <Typography variant="h5" className="text-center">Reset Password</Typography>
       
      <div className="col mt-4">
       <Controller
        name="confirm_password"
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
  </>

  );
}

export default ResetPassword