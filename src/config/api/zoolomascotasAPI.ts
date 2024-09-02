import axios from "axios";

const urlAPI = "http://localhost:8005/";

const zoolomascotasAPI = axios.create({
  baseURL: urlAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { zoolomascotasAPI };
