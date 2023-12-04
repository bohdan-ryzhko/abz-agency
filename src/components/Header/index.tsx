import sass from "./Header.module.scss";
import { useAppDispatch } from "../../hooks";
import { Logo } from "../../icons";
import { fetchToken } from "../../redux";
import { AccentButton } from "../AccentButton.tsx";
import { Container } from "../Container";
import { FC } from "react";

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <a href="#" className={sass.logo}>
            <Logo />
          </a>
          <div className={sass.btnsWrapper}>
            <AccentButton href="#" text="Users" />
            <AccentButton handleClick={() => dispatch(fetchToken())} text="Sign up" />
          </div>
        </div>
      </Container>
    </header>
  )
}
