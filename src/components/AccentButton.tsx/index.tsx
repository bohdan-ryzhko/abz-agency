import sass from "./AccentButton.module.scss";
import { Spinner } from "../Spinner";
import { FC } from "react";

type AccentButtonProps = {
  handleClick?: () => void,
  text: string,
  href?: string,
  isLoad?: boolean,
}

export const AccentButton: FC<AccentButtonProps> = ({ handleClick, text, href, isLoad }) => {
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
              isLoad
                ? <Spinner color="#000000" size={25} />
                : text
            }
          </button>
      }
    </>
  );
}
