import { useState } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { InitialRegisterValues } from "../d";
import { FormikHelpers } from "formik";
import { createUser } from "../redux/usersSlice/operations";

export const useSubmitCreateUser = (token: string) => {
  const [loadedPhoto, setLoadedPhoto] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (values: InitialRegisterValues, { resetForm }: FormikHelpers<InitialRegisterValues>) => {
    console.log(values);

    const formData = new FormData();
    const { name, email, phone, position_id, photo } = values;

    formData.append("position_id", position_id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo!);
    formData.append("phone", phone);

    dispatch(createUser({
      data: formData,
      token: token,
    }));

    resetForm();
    setLoadedPhoto(null);
  }

  return {
    loadedPhoto,
    setLoadedPhoto,
    onSubmit,
  }
}