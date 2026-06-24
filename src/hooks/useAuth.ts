import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};