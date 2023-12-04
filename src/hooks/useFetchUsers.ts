import { useEffect, useState } from "react";
import { fetchUsers } from "../redux";
import { useAppDispatch } from "./useAppDispatch";

export const useFetchUsers = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchUsers({ page, signal: controller.signal }));

    return () => {
      controller.abort();
    }
  }, [dispatch, page]);

  return setPage;
}
