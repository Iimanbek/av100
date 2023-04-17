import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    login_data: "",
    password_data: "",
    user_data: "",
    response: null,
    user_num: "",
    xhr_data: "",
    text: "",
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
    createUserAcc() {
      var xhr = new XMLHttpRequest();
      var json = JSON.stringify({
        login: "0501099966",
      });
      xhr.open("POST", "https://api.av100.ru/v3/register", true);
      function setHeaders(headers) {
        for (let key in headers) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
      setHeaders({
        "Content-type": "application/json",
        "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
      });
      xhr.onload = function () {
        if (this.status == 200) {
          console.log("Worked");
        } else {
          console.log(this.status);
        }
      };
      xhr.onerror = function () {
        console.log("Request Error");
      };
      xhr.onreadystatechange = "...";

      // Отсылаем объект в формате JSON и с Content-Type application/json
      // Сервер принимает Content-Type и раскодирововает
      xhr.send(json);
      this.xhr_data = xhr;
      console.log(this.xhr_data);
    },
    async save_profile() {},
  },
});
