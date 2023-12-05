import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch"
import { fetchPositions } from "../redux";

export const useFetchPositions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);
}
