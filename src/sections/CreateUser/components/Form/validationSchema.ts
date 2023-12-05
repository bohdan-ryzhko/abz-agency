import * as Yup from 'yup';
import { emailRegExp, phoneRegExp } from '../../../../constants';

export const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(60, "Maximum 60 characters")
    .required("Required"),
  email: Yup
    .string()
    .matches(emailRegExp, "Enter valid email")
    .required("Required"),
  phone: Yup
    .string()
    .matches(phoneRegExp, "Phone must contain only digits, start with \"+380\"")
    .required("Required"),
  position_id: Yup
    .string()
    .required("Required"),
  photo: Yup.mixed()
    .required("Required")
    .test("FILE_SIZE", "Less than 5MB", (value: Yup.AnyObject) => !(value.size > 5000000))
    .test("FILE_FORMAT", "File must be - jpeg/jpg", (value: Yup.AnyObject) => {
      return value.type === "image/jpeg" || value.type === "image/jpg";
    })
    .test("MINIMUM_SIZE", "Minimum size 70x70px", (value: Yup.AnyObject) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = function (event) {
          const img = new Image();
          img.src = event.target!.result as string;
          img.onload = function () {
            const { width, height } = img;
            if (width >= 70 && height >= 70) {
              resolve(true);
            } else {
              resolve(false);
            }
          };
        };

        reader.readAsDataURL(value as Blob);
      });
    })
});