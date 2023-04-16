import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    login_data: "",
    password_data: "",
  }),
  actions: {
    getUserAccaunt() {
      // await axios.post(
      //   "https://api.av100.ru/v3/login",
      //   {
      //     login: this.login_data,
      //     password: this.password_data,
      //     fromuser: 0,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      axios
        .post("https://api.av100.ru/v3/login", {
          // login: this.login_data,
          // password: this.password_data,
          login: "9678622972",
          password: "8680026651",
          fromuser: 0,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

      //console.log(result.data.data); // '{"name":"John Doe"}'
      //console.log(result.data.headers["Content-Type"]); // 'application/json',
    },
    async registr() {},
    async save_profile() {},
  },
});
