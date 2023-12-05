import sass from "./CreateUser.module.scss";
import { FC } from "react";
import { Container, Title } from "../../components";
import { Form } from "./components";

export const CreateUser: FC = () => {
  return (
    <section className={sass.createUser}>
      <Container>
        <div className={sass.createUserInner}>
          <Title text="Working with POST request" />
          <Form />
        </div>
      </Container>
    </section>
  )
}
