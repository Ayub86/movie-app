import React from 'react'
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../assest/form.scss"
import API from "../../utlis/API"
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("DATA", data);
    API.post("/reset-password", data)
      // console.log(data)
      .then((response) => {
        console.log("---res", response);
        let message = response?.data?.message;
        console.log(message);
        navigate("/login")
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        console.log(message);
      });
  };
  return (
    <>

      <div className="form">
        <form>
          <Typography variant="h5" className="text-center">Reset Password</Typography>

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
            // rules={{ required: "Password required" }}
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
              rules={{ required: "Confirm Password required" }}
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