import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => ({
    movieInputs: "hello world",
  }),
  actions: {},
});
