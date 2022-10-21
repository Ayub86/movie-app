import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "../../assest/form.scss";
import "../../assest/scss/login.scss";
// import API from "../../utlis/API"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncLogin } from "../../redux/features/movies/movieSlice"


const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm();
  const {success,user} = useSelector((state)=>state.movies)

  const onSubmit = (data) => {
    const { email, password } = data
    dispatch(fetchAsyncLogin({ email, password }))
  };
  
  const authToken = localStorage.getItem("token")
  console.log(user,"user");
  


  return (
    <>
      <div className="form shadow-lg p-3 mb-5 bg-white rounded">
        <form>
          <Typography variant="h4" className="text-center">
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
          <div className="signup-link">
            <Link to="/register">
              Sign Up?
            </Link>
          </div>
        </form>

      </div>

    </>
  );

}
export default LogIn;