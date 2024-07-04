import { create } from "zustand";
import myAxios from "./axiosConfig";

interface NotifState {
  number: number;
  fetch: () => Promise<void>;
  decrease: () => void;
  reset: () => void;
}

const useNotifStore = create<NotifState>((set) => ({
  number: 0,
  fetch: async () => {
    const res = await myAxios.get("/api/user/notifications");
    set({ number: res.data.data });
  },
  decrease: () => {
    set((state) => ({ number: state.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));

export default useNotifStore;
