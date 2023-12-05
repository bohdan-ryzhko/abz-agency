import sass from "./File.module.scss";
import { FormControl, FormHelperText } from '@material-ui/core';
import { FormikValues } from "formik";
import { FC } from 'react';

type FileProps = {
  formik: FormikValues,
  text: null | string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const File: FC<FileProps> = ({ handleChange, text, formik }) => {

  const isError = (Object.values(formik.errors).length > 0) && (formik.errors["photo"] || formik.touched["photo"]);

  return (
    <FormControl style={{ marginBottom: 50 }} className={sass.controller}>
      <label className={isError ? sass.labelError : sass.label} htmlFor="photo">
        <span className={isError ? sass.uploadError : sass.upload}>Upload</span>
        {
          text
            ? text
            : "Upload your photo"
        }
      </label>
      <input
        onChange={handleChange}
        type="file"
        id="photo"
        name="photo"
        accept=".jpg,.jpeg"
        className={sass.input}
      />
      <FormHelperText style={{ color: "#CB3D40", marginLeft: 16 }}>
        {isError}
      </FormHelperText>
    </FormControl>
  )
}
