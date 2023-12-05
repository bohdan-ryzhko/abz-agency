import sass from "./AccentButton.module.scss";
import { Spinner } from "../Spinner";
import { FC } from "react";

type AccentButtonProps = {
  handleClick?: () => void,
  text: string,
  href?: string,
  isLoad?: boolean,
  disabled?: boolean,
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
}

export const AccentButton: FC<AccentButtonProps> = ({
  handleClick,
  text,
  href,
  isLoad,
  disabled,
  type = "button"
}) => {
  return (
    <>
      {
        href
          ? <a className={sass.button} href={href}>{text}</a>
          : <button
            className={sass.button}
            onClick={handleClick}
            type={type}
            disabled={disabled}
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
