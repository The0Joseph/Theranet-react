import { create } from "zustand";

type homePageType = {
  page: "devices" | "channels" ;
  setpage: (newpage: homePageType["page"]) => void;
};

export const homePageStore = create<homePageType>((set) => ({
  page: "channels",
  setpage: (newpage) => set({ page: newpage }),
}));
