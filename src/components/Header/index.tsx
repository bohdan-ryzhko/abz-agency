import sass from "./Header.module.scss";
import { FC } from "react";
import { useAppDispatch, useReduxState } from "../../hooks";
import { Logo } from "../../icons";
import { fetchToken } from "../../redux";
import { AccentButton } from "../AccentButton.tsx";
import { Container } from "../Container";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useReduxState();

  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <a href="/" className={sass.logo}>
            <Logo />
          </a>
          <div className={sass.btnsWrapper}>
            <AccentButton href="#users" text="Users" />
            <AccentButton isLoad={token.isLoad} handleClick={() => dispatch(fetchToken())} text="Sign up" />
          </div>
        </div>
      </Container>
    </header>
  )
}
