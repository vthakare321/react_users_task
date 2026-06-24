import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userService";

export const useUsers = (
  limit: number,
  skip: number
) => {
  return useQuery({
    queryKey: ["users", limit, skip],
    queryFn: () => getUsers(limit, skip),
  });  
};     