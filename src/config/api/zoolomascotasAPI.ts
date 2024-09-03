import axios from "axios";

const urlAPI = "http://192.168.2.3:4000/";

const zoolomascotasAPI = axios.create({
  baseURL: urlAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { zoolomascotasAPI };
