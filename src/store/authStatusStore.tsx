import { create } from "zustand";

type authStatusType = {
  status: "checking" | "authenticated" | "not-authenticated";
  setStatus: (newStatus: authStatusType["status"]) => void;
};

export const authStatusStore = create<authStatusType>((set) => ({
  status: "checking",
  setStatus: (newStatus) => set({ status: newStatus }),
}));
