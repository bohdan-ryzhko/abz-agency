import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { selectToken, selectUsers } from "../redux/selectors";

export const useReduxState = (): RootState => ({
  token: useSelector(selectToken),
  users: useSelector(selectUsers),
});
