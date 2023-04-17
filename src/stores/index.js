import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useIndexStore = defineStore("index", {
  state: () => ({
    login_data: "",
    password_data: "",
    user_data: "",
    response: null,
    user_num: "",
    xhr_data: "",
    text: "",
    user_settings: {
      id: 0,
      login: "",
      email: "",
      fname: "",
      lname: "",
      phone: "",
      companyname: "",
      telegramChat: "",
      clicks: 0,
      expire: 0,
      autoru: 0,
      sendMethod: 0,
      timezone: "",
      timezonestring: "",
      notifytype: "",
      notifytypestring: "",
      companyid: 0,
      calltype: "",
      enableaudio: true,
      locklentaupdate: false,
      erased: 0,
      os: "",
      sipid: "",
      updatePeriod: 0,
      filterMaxCount: 0,
      turbosip: "",
      turbosip5accessto: "",
      turbosip20accessto: "",
      colorlenta: true,
      ignoreavg: true,
      redirecttarget: 0,
      lentacolortype: 0,
    },
  }),
  actions: {
    async getUserAccaunt() {
      // 9678622972
      // 8680026651
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
      if (xhr.status == 200) {
        this.text = `<p class="ok">We messaged you</p>`;
      } else {
        this.text = `<p class="not">There is a registrated number</p>`;
      }
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
    async save_profile(id) {
      const userData = JSON.parse(localStorage.getItem("user"));

      const config = {
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
          "X-User-Token": `${userData.token}`,
        },
      };
      const url = `https://api.av100.ru/v3/user/${id}`;
      const data = {
        id: `${id}`,
        login: "",
        email: "",
        fname: "",
        lname: "",
        phone: "",
        companyname: "",
        telegramChat: "",
        clicks: 0,
        expire: 0,
        autoru: 0,
        sendMethod: 0,
        timezone: "",
        timezonestring: "",
        notifytype: "",
        notifytypestring: "",
        companyid: 0,
        calltype: "",
        enableaudio: true,
        locklentaupdate: false,
        erased: 0,
        os: "",
        sipid: "",
        updatePeriod: 0,
        filterMaxCount: 0,
        turbosip: "",
        turbosip5accessto: "",
        turbosip20accessto: "",
        colorlenta: true,
        ignoreavg: true,
        redirecttarget: 0,
        lentacolortype: 0,
      };
      axios
        .post(url, data, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
});
