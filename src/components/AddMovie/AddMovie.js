import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";

import API from "../../utlis/API"

const AddMovie = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {

        console.log(data);

        API.post("/create-movies", data)
            .then((response) => {
                console.log("---res", response);
                let message = response?.data?.message;
                console.log(message);


            }).catch((error) => {
                let message = error?.response?.data?.message;
                console.log(message);

            });
    };

    return (
        <div className="form">
            <form>
                <Typography variant="h5" className="text-center">Add Movie</Typography>
                <div className="col mt-4">
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Title"
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                                fullWidth={true}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: "Title Required" }}
                    />
                </div>
                <div className="col mt-4">
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Discription"
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                                fullWidth={true}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: "Description Required" }}
                    />
                </div>
                <div className="col mt-4">
                    <Controller
                        name="sub_titles"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="sub titles"
                                variant="outlined"
                                value={value}
                                fullWidth={true}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: "Sub Titles Required" }}
                    />
                </div>

                <div className="col mt-4">
                    <Controller
                        name="cover_photo"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Cover Photo"
                                variant="outlined"
                                value={value}
                                fullWidth={true}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: "Cover Photo required" }}
                    />
                </div>

                <div className="col mt-4">
                    <Controller
                        name="generes"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Generes"
                                variant="outlined"
                                value={value}
                                fullWidth={true}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: "generes required" }}
                    />
                </div>

                <div className="col mt-4">
                    <Controller
                        name="languages"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Languages"
                                variant="outlined"
                                value={value}
                                fullWidth={true}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    // rules={{ required: "Cover Photo required" }}
                    />
                </div>

                <div className="col mt-4">
                    <Controller
                        name="rating"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Rating"
                                variant="outlined"
                                value={value}
                                fullWidth={true}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    // rules={{ required: "Rating required" }}
                    />
                </div>

                <div className="d-flex justify-content-center mt-4">


                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                </div>

            </form>
        </div>
    );
}

export default AddMovie