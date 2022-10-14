import React from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.css"
import axios from "axios";

const LogIn = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://whipz.herokuapp.com/api/v1/user/login", data)
      .then((response) => {
        console.log("---res", response);
        let message = response?.data?.message;
        //console.log(message);
        alert(`${message}`);
        //setIsloading(false);
        // navigate("/login")
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        console.log(message);
        alert(`${message}`);
        //setIsloading(false);
      });
  };
  return (
    <>
      <div className="form shadow-lg p-3 mb-5 bg-white rounded">
        <form>
          <Typography variant="h3" className="text-center">
            Login
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
              rules={{ required: "Pass Required" }}
            />
          </div>
          <div className="col mt-4">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  value={value}
                  fullWidth={true}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  placeholder="eg: PassLogin%7"
                />
              )}
              rules={{ required: "Password Required" }}
            />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
