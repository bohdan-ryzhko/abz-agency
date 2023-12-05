import sass from "./Form.module.scss";
import { FC } from "react";
import { TextInput } from "../TextInput";
import { useFormik } from "formik";
import { InitialRegisterValues } from "../../../../d";
import { useFetchPositions, useReduxState, useSubmitCreateUser } from "../../../../hooks";
import { FormHelperText, RadioGroup } from "@material-ui/core";
import { CheckBox } from "../CheckBox";
import { File } from "../File";
import { AccentButton } from "../../../../components";
import { validationSchema } from "./validationSchema";

const initialValues: InitialRegisterValues = {
  name: "",
  email: "",
  phone: "",
  position_id: "",
  photo: null,
}

export const Form: FC = () => {
  useFetchPositions();
  const { positions, token, users } = useReduxState();
  const { loadedPhoto, setLoadedPhoto, onSubmit } = useSubmitCreateUser(token.token!);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handlePhoto = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("photo", target.files![0]);
    if (target.value) {
      setLoadedPhoto(target.files![0].name);
    } else {
      setLoadedPhoto(null);
    }
  }

  return (
    <form className={sass.form} onSubmit={formik.handleSubmit}>
      <div className={sass.inputsWrapper}>
        <TextInput formik={formik} name="name" />
        <TextInput formik={formik} name="email" />
        <TextInput formik={formik} name="phone" />
      </div>
      <h2 className={sass.positionsTitle}>Select your position</h2>
      <RadioGroup
        style={{ marginBottom: 50, width: "100%" }}
        aria-label="position"
        name="position_id"
        value={formik.values.position_id}
        onChange={formik.handleChange}
      >
        {
          positions.positions.map((position) => <CheckBox formik={formik} key={position.id} position={position} />)
        }
        <FormHelperText style={{ color: "#CB3D40" }}>
          {formik.touched.position_id && formik.errors.position_id}
        </FormHelperText>
      </RadioGroup>
      <File formik={formik} handleChange={handlePhoto} text={loadedPhoto} />
      <AccentButton isLoad={users.isLoad} text="Sign up" type="submit" disabled={Object.values(formik.errors).length !== 0} />
    </form>
  )
}
