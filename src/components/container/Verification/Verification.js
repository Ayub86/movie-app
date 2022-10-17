import React from "react";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import axios from "axios";
import "../../../assest/form.css";
import * as yup from "yup";
import useYupValidationResolver from "../../../ValidationSchema";

const Verification = () => {
  const validationSchema = yup.object({
    n1: yup.string().required("Required"),
    n2: yup.string().required("Required"),
    n3: yup.string().required("Required"),
    n4: yup.string().required("Required"),
  });
  const resolver = useYupValidationResolver(validationSchema);

  const { handleSubmit, setValue, control, getValues } = useForm({ resolver });
  function handleChange(e) {
    const { name } = e.target;
    //Only for number entering
    const enteredValue = e.target.value.replace(/[^0-9]/g, "");
    // const enteredValue = e.target.value.replace(/[^0-9]/g, '');
    //const enteredValue = e.target.value.replace(/\D/g, "");replace(/[^0-9]/g, '')

    console.log(enteredValue, "value");
    let values = getValues();
    console.log(values);

    if (e.target.value.length > 1) {
      let finalValue = values[name].split("")[0];
      setValue(name, finalValue);
    } else {
      setValue(name, enteredValue);
    }
  }

  const onSubmit = (data) => {
    console.log(data, "data");
    const { n1, n2, n3, n4 } = data;
    let otp = n1 + n2 + n3 + n4;
    console.log("otp", otp);

    axios
      .post("https://whipz.herokuapp.com/api/v1/user/verify-otp", { otp })
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
          <Typography variant="h6" className="text-center">
            Please Enter OTP
          </Typography>
          <div className="nunmber_list" style={{ display: "flex" }}>
            <div className="col mt-4">
              <Controller
                name="n1"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={{ width: 90 }}
                    name={"n1"}
                    label="OTP"
                    variant="outlined"
                    value={value.n1}
                    onChange={handleChange}
                    fullWidth={true}
                    error={!!error}
                    inputProps={{ maxLength: 1 }}
                    placeholder="eg: sample@gmail.com"
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Required" }}
              />
            </div>
            <div className="col mt-4">
              <Controller
                name="n2"
                control={control}
                defaultValue=""
                render={({ field: { value }, fieldState: { error } }) => (
                  <TextField
                  sx={{ width: 90 }}
                    label="OTP"
                    name={"n2"}
                    variant="outlined"
                    value={value.n2}
                    onChange={handleChange}
                    fullWidth={true}
                    inputProps={{ maxLength: 1 }}
                    error={!!error}
                    placeholder="eg: sample@gmail.com"
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Required" }}
              />
            </div>
            <div className="col mt-4">
              <Controller
                name="n3"
                control={control}
                defaultValue=""
                render={({ field: { value }, fieldState: { error } }) => (
                  <TextField
                  sx={{ width: 90 }}
                    label="OTP"
                    name={"n3"}
                    variant="outlined"
                    value={value.n3}
                    onChange={handleChange}
                    fullWidth={true}
                    error={!!error}
                    inputProps={{ maxLength: 1 }}
                    placeholder="eg: sample@gmail.com"
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Required" }}
              />
            </div>
            <div className="col mt-4">
              <Controller
                name="n4"
                control={control}
                defaultValue=""
                render={({ field: { value }, fieldState: { error } }) => (
                  <TextField
                  sx={{ width: 90 }}
                    label="OTP"
                    name={"n4"}
                    variant="outlined"
                    value={value.n4}
                    onChange={handleChange}
                    fullWidth={true}
                    inputProps={{ maxLength: 1 }}
                    error={!!error}
                    placeholder="eg: sample@gmail.com"
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Required" }}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Verification;
