import { FC } from "react";
import { FormikValues } from "formik";
import { TextField } from "@material-ui/core";

type TextInputProps = {
  formik: FormikValues,
  name: string,
}

export const TextInput: FC<TextInputProps> = ({ formik, name }) => {
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={name.charAt(0).toUpperCase() + name.slice(1)}
      variant="outlined"
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.errors[name] && formik.touched[name]}
      helperText={(formik.touched[name] && formik.errors[name])}
    />
  );
}
