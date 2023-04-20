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
    // user settings data for put ang get request
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
    // login acc
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
    //using xml request to create a user
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

    // sending to the both functions id because can't get route value

    // saving changes, there something wrong with request can get 200, couldn't fill parametr type "path"
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
        login: this.user_settings.login,
        email: this.user_settings.email,
        fname: this.user_settings.fname,
        lname: this.user_settings.lname,
        phone: this.user_settings.phone,
        companyname: this.user_settings.companyname,
        telegramChat: this.user_settings.telegramChat,
        clicks: this.user_settings.clicks,
        expire: this.user_settings.expire,
        autoru: this.user_settings.autoru,
        sendMethod: this.user_settings.sendMethod,
        timezone: this.user_settings.timezone,
        timezonestring: this.user_settings.timezonestring,
        notifytype: this.user_settings.notifytype,
        notifytypestring: this.user_settings.notifytypestring,
        companyid: this.user_settings.companyid,
        calltype: this.user_settings.calltype,
        enableaudio: this.user_settings.enableaudio,
        locklentaupdate: this.user_settings.locklentaupdate,
        erased: this.user_settings.erased,
        os: this.user_settings.os,
        sipid: this.user_settings.sipid,
        updatePeriod: this.user_settings.updatePeriod,
        filterMaxCount: this.user_settings.filterMaxCount,
        turbosip: this.user_settings.turbosip,
        turbosip5accessto: this.user_settings.turbosip5accessto,
        turbosip20accessto: this.user_settings.turbosip20accessto,
        colorlenta: this.user_settings.colorlenta,
        ignoreavg: this.user_settings.ignoreavg,
        redirecttarget: this.user_settings.redirecttarget,
        lentacolortype: this.user_settings.lentacolortype,
      };
      axios
        .put(url, data, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },

    // getting data of user for profile settings
    async get_user_data(id) {
      var userData = JSON.parse(localStorage.getItem("user"));
      const URL = `https://api.av100.ru/v3/user/${id}`;
      const res = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
          "X-User-Token": `${userData.token}`,
        },
      });
      if (res.status == 200) {
        // this.id = `${id}`;
        this.user_settings.login = res.data.login;
        this.user_settings.email = res.data.email;
        this.user_settings.fname = res.data.fname;
        this.user_settings.lname = res.data.lname;
        this.user_settings.phone = res.data.phone;
        this.user_settings.companyname = res.data.companyname;
        this.user_settings.telegramChat = res.data.telegramChat;
        this.user_settings.clicks = res.data.clicks;
        this.user_settings.expire = res.data.expire;
        this.user_settings.autoru = res.data.autoru;
        this.user_settings.sendMethod = res.data.sendMethod;
        this.user_settings.timezone = res.data.timezone;
        this.user_settings.timezonestring = res.data.timezonestring;
        this.user_settings.notifytype = res.data.notifytype;
        this.user_settings.notifytypestring = res.data.notifytypestring;
        this.user_settings.companyid = res.data.companyid;
        this.user_settings.calltype = res.data.calltype;
        this.user_settings.enableaudio = res.data.enableaudio;
        this.user_settings.locklentaupdate = res.data.locklentaupdate;
        this.user_settings.erased = res.data.erased;
        this.user_settings.os = res.data.os;
        this.user_settings.sipid = res.data.sipid;
        this.user_settings.updatePeriod = res.data.updatePeriod;
        this.user_settings.filterMaxCount = res.data.filterMaxCount;
        this.user_settings.turbosip = res.data.turbosip;
        this.user_settings.turbosip5accessto = res.data.turbosip5accessto;
        this.user_settings.turbosip20accessto = res.data.turbosip20accessto;
        this.user_settings.colorlenta = res.data.colorlenta;
        this.user_settings.ignoreavg = res.data.ignoreavg;
        this.user_settings.redirecttarget = res.data.redirecttarget;
        this.user_settings.lentacolortype = res.data.lentacolortype;
      } else {
        alert("please login again, something went wrong");
      }
    },
  },
});
