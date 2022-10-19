import React from 'react'
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../assest/form.scss"
import API from "../../utlis/API"
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { handleSubmit, control } = useForm();
   const navigate=useNavigate();
  const onSubmit = (data) => {
    API
      .post("https://uploadmoviesapp.herokuapp.com/director/forgotPassword", data)
      .then((response) => {
        console.log("---res", response);
        let message = response?.data?.message;
        //console.log(message);
        alert(`${message}`);
        navigate("/verification")
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        console.log(message);
        alert(`${message}`);
      });
  };
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
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="E-Mail"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  fullWidth={true}
                  error={!!error}
                  placeholder="eg: sample@gmail.com"
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "E-Mail Required" }}
            />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </form>
      </div>
    </>

  )
}

export default ForgotPassword
