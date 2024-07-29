import { create } from "zustand";
import { login, logout, validateToken } from "../services/api";

type authStatusType = {
  status: "checking" | "authenticated" | "not-authenticated";
  setStatus: (newStatus: authStatusType["status"]) => void;
  login: (data: FormData) => void;
  logout: () => void;
  checkToken: () => void
};

export const authStatusStore = create<authStatusType>((set) => ({
  status: "checking",
  setStatus: (newStatus) => set({ status: newStatus }),
  login: async (data: FormData) => {
    const isLogin = await login(data);
    if (isLogin) set({ status: "authenticated" });
  },
  logout: async () => {
    await logout();
    set({ status: "not-authenticated" })
    localStorage.token = null;
  },
  checkToken: async () => {
    const token = await validateToken()
    set({ status: token ? "authenticated" : "not-authenticated" })
  }
}));
