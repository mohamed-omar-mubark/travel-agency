import { defineStore } from "pinia";

export const useTravelStore = defineStore("travel", {
  actions: {
    // book
    book(data) {
      alert(JSON.stringify(data));
    },
  },
});
