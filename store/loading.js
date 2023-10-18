import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    mainLoading: true,
  }),

  getters: {
    mainLoadingStatus: (state) => state.mainLoading,
  },

  actions: {
    setMainLoading(status) {
      this.mainLoading = status;
    },
  },
});
