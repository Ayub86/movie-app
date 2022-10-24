import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../assest/form.scss"
import { useNavigate } from "react-router-dom";
import API from "../../utlis/API"
import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { fetchAsyncRegister } from "../../redux/features/movies/movieSlice";

const Register = () => {

  const { handleSubmit, control } = useForm();
  const navigate = useNavigate()

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncRegister())
  // }, [dispatch])

  const onSubmit = (data) => {

    console.log(data);
    dispatch(fetchAsyncRegister(data))
    navigate("/login")
  };

  return (
    <div className="form">
      <form>
        <Typography variant="h3" className="text-center">Register</Typography>
        <div className="col mt-4">
          <Controller
            name="full_name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Full Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                fullWidth={true}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Full Name Required" }}
          />
        </div>
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
        <div className="col mt-4">
          <Controller
            name="profile_photo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Profile Photo"
                variant="outlined"
                value={value}
                fullWidth={true}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Profile Photo required" }}
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
