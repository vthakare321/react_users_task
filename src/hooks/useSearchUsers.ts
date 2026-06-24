import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "../api/userService";

export const useSearchUsers = (query: string) => {
  return useQuery({
    queryKey: ["search-users", query],
    queryFn: () => searchUsers(query),
    enabled: !!query,
  });
};