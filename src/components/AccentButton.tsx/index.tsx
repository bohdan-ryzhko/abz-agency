import sass from "./AccentButton.module.scss";
import { useReduxState } from "../../hooks";
import { Spinner } from "../Spinner";
import { FC } from "react";

type AccentButtonProps = {
  handleClick?: () => void,
  text: string,
  href?: string,
}

export const AccentButton: FC<AccentButtonProps> = ({ handleClick, text, href }) => {
  const { token } = useReduxState();

  return (
    <>
      {
        href
          ? <a className={sass.button} href={href}>{text}</a>
          : <button
            className={sass.button}
            onClick={handleClick}
            type="button"
          >
            {
              token.isLoad
                ? <Spinner color="#000000" size={25} />
                : text
            }
          </button>
      }
    </>
  );
}
