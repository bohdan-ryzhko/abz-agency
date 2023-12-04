import sass from "./Users.module.scss";
import { FC } from "react";
import { AccentButton, Title, Container } from "../../components";
import { UsersList } from "./components";
import { useFetchUsers, useReduxState } from "../../hooks";

export const Users: FC = () => {
  const { users } = useReduxState();
  const setPage = useFetchUsers();

  const isShowPaginationButton = (users.total_users > users.users.length) || users.error !== null;

  return (
    <section className={sass.users}>
      <Container>
        <div className={sass.usersInner}>
          <Title text="Working with GET request" />
          <UsersList />
          {
            isShowPaginationButton && (
              <AccentButton isLoad={users.isLoad} handleClick={() => setPage(prev => prev + 1)} text="Show more" />
            )
          }
        </div>
      </Container>
    </section>
  )
};
