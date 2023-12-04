import { FC } from "react";
import { ColorRing } from 'react-loader-spinner';

type AccentColors = "#00BDD3" | "#FFE302" | "#000000";

type SpinnerProps = {
  size: number,
  color: AccentColors,
}

export const Spinner: FC<SpinnerProps> = ({ size, color }) => (
  <ColorRing
    visible={true}
    height={`${size}`}
    width={`${size}`}
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={[color, color, color, color, color]}
  />
);
