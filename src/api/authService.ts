import { apiClient } from "./apiClient";
import type { LoginPayload, LoginResponse } from "../types/auth.types";

export const login = async (
  data: LoginPayload
): Promise<LoginResponse> => {
  const response = await apiClient.post(
    "/auth/login",
    {
      ...data,
      expiresInMins: 30,
    }
  );

  return response.data;
};