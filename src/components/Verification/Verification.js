import React from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import "../../assest/form.scss"
import { useNavigate } from "react-router-dom";
import API from "../../utlis/API"

const Verification = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {

    console.log(data);
    
    API.post("/verify-otp", data)
      .then((response) => {
        console.log("---res", response);
        let message = response?.data?.message;
        console.log(message);
        navigate("/reset-password/:otp")
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        console.log(message);
      });
  };

  return (

    <div className="form">
      <form>
        <Typography variant="h5" className="text-center">Verify OTP</Typography>
        <div className="col mt-4">
          <Controller
            name="otp"
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
            rules={{ required: "OTP Required" }}
          />
        </div>
        
        <div className="d-flex justify-content-center mt-4">
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>

      </form>
    </div>
  );

}

export default Verification