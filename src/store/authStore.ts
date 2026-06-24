import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LoginResponse } from "../types/auth.types";

interface AuthState {
  user: LoginResponse | null;
  token: string | null;

  setUser: (user: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user) =>
        set({
          user,
          token: user.accessToken,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);