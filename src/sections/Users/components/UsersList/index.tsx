import sass from "./UsersList.module.scss";
import { useReduxState } from "../../../../hooks";
import { User } from "../User";
import { FC } from "react";

export const UsersList: FC = () => {
  const { users } = useReduxState();

  return (
    <ul className={sass.list}>
      {
        users.users.map((user) => <User key={user.id} {...user} />)
      }
    </ul>
  )
}
