import React from "react";
import {  TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.css"
import axios from "axios";
import * as yup from 'yup';
import useYupValidationResolver from "../../../ValidationSchema";

const LogIn = () => {
  const validationSchema = yup.object({
		email: yup.string().email('Invalid email format').required('Required'),
		password: yup.string().min(6).required("Required"),

	});
	const resolver = useYupValidationResolver(validationSchema)
  const { handleSubmit, control } = useForm({resolver});

  const onSubmit = (data) => {
    console.log(data)
    axios.post("https://uploadmoviesapp.herokuapp.com/director/login", data)
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
             // rules={{ required: "Password Required" }}
            />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary btn-lg  btn-block" onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
