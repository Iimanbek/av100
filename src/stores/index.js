import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    login_data: "",
    password_data: "",
    user_data: "",
    response: null,
    user_num: "",
  }),
  actions: {
    async getUserAccaunt() {
      this.response = await axios.post(
        "https://api.av100.ru/v3/login",
        {
          login: this.login_data,
          password: this.password_data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
          },
        }
      );
      this.user_data = await this.response.data;
    },
    async createUserAcc() {
      const res = await axios.post(
        "https://api.av100.ru/v3/register",
        {
          login: "837438478",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
          },
        }
      );
      console.log(res);
    },
    async save_profile() {},
  },
});
