import React from "react";
import { Typography, Button,TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useYupValidationResolver from "../../../ValidationSchema";
import "../../../assest/form.css";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().min(6).required("Required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Required"),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({ resolver });
  const navigate=useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://whipz.herokuapp.com/api/v1/user/signup", data)
      .then((response) => {
        console.log("---res", response);
        let message = response?.data?.message;
        //console.log(message);
        alert(`${message}`);
        //setIsloading(false);
        navigate("/login");
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        console.log(message);
        alert(`${message}`);
        //setIsloading(false);
      });
  };

  return (
    <div className="form">
      <form>
        <Typography variant="h3" className="text-center">
          Register
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
