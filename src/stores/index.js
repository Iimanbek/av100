import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    login_data: "",
    password_data: "",
    user_data: "",
    response: null,
  }),
  actions: {
    async getUserAccaunt() {
      this.response = await axios.post(
        "https://api.av100.ru/v3/login",
        {
          login: "9678622972",
          password: "8680026651",
        },
        {
          headers: { "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9" },
        }
      );
      this.user_data = await this.response.data;
    },
    createUserAcc() {},
    async save_profile() {},
  },
});
