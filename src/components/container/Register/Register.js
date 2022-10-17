import React from "react";
import { Typography, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import "../../../assest/form.css";
import useYupValidationResolver from "../../../ValidationSchema";
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
  const navigate = useNavigate();

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

  );
};

export default Register;
