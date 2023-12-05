import { FormControlLabel, Radio } from "@material-ui/core";
import { FC } from "react";
import { PositionType } from "../../../../d";
import { FormikValues } from "formik";

type CheckBoxProps = {
  position: PositionType,
  key: number,
  formik: FormikValues,
}

export const CheckBox: FC<CheckBoxProps> = ({ position, formik }) => {
  return (
    <FormControlLabel
      value={position.id}
      checked={Number(formik.values.position_id) === position.id}
      control={<Radio color="primary" />}
      label={position.name}
    />
  );
}
