import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { selectToken, selectUsers, position_ids } from "../redux/selectors";

export const useReduxState = (): RootState => ({
  token: useSelector(selectToken),
  users: useSelector(selectUsers),
  positions: useSelector(position_ids),
});
