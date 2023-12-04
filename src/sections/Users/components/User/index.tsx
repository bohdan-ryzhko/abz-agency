import sass from "./User.module.scss"
import { FC } from "react";
import { UserType } from "../../../../d";

export const User: FC<UserType> = ({
  name,
  email,
  phone,
  position,
  photo
}) => {
  return (
    <li className={sass.user}>
      <img height={70} width={70} className={sass.avatar} src={photo} alt={`Avatar-${name}`} />
      <p className={sass.info}>{name}</p>
      <p className={sass.info}>{position}</p>
      <p className={sass.info}>{email}</p>
      <p className={sass.info}>{phone}</p>
    </li>
  )
}
