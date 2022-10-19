import React from "react";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../../assest/form.css"
import axios from "axios";
import * as yup from "yup";
import useYupValidationResolver from "../../../ValidationSchema";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [otpCheck, setotpCheck] = useState(false);
  const validationSchema = yup.object({
    password: yup.string().min(6).required("Required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Required"),
  });
  const resolver = useYupValidationResolver(validationSchema);
  const { otp } = useParams();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({ resolver });
  useEffect(() => {
    axios
      .post("https://whipz.herokuapp.com/api/v1/user/verify-otp", { otp })
      .then((res) => {
        if (res.statusText === "OK") {
          setotpCheck(true);
        }
      })
      .catch((error) => console.log("Errror-->", error));
  }, [otp]);
  const onSubmit = (data) => {
    const { password, confirm_password } = data;
    const formData = {
      otp: otp,
      password: password,
      confirm_password: confirm_password,
    };

    axios
      .post("https://whipz.herokuapp.com/api/v1/user/reset-password", formData)
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
    <>
      {otpCheck ? (
        <div className="form">
          <form>
            <Typography variant="h5" className="text-center">
              Reset Password
            </Typography>

            <div className="col mt-4">
              <Controller
                name="confirm_password"
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
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
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
      ) : (
        <div className=" col txt text-center">
          <h2>
            <Typography variant="h4">Invalid OTP</Typography>
          </h2>
          <p>Please create password to complete this process</p>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
