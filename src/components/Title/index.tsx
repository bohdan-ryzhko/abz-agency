import sass from "./Title.module.scss";
import { FC } from "react";

type TitleProps = {
  text: string,
}

export const Title: FC<TitleProps> = ({ text }) => (
  <h2 className={sass.title}>{text}</h2>
);
