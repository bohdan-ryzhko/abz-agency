import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { selectToken } from "../redux/selectors";

export const useReduxState = (): RootState => ({
  token: useSelector(selectToken),
});
