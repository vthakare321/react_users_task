import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api/userService";

export const useUserDetail = (
  id: number,
  enabled = true
) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled,
  });
};