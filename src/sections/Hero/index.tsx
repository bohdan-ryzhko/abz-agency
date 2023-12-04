import sass from "./Hero.module.scss";
import { Container } from "../../components/Container";
import { FC } from "react";
import { AccentButton } from "../../components";
import { useAppDispatch } from "../../hooks";
import { fetchToken } from "../../redux";

export const Hero: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={sass.hero}>
      <Container>
        <div className={sass.heroInner}>
          <h1 className={sass.title}>Test assignment for front-end developer</h1>
          <p className={sass.subtitle}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <AccentButton handleClick={() => dispatch(fetchToken())} text="Sign up" />
        </div>
      </Container>
    </section>
  )
}
