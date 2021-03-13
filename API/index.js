import axios, { AxiosInstance } from "axios";


const api = axios.create({
    baseURL: "https://csrng.net/csrng/csrng.php",
});

export const getRandomNumber = (min , max)=> {
    return api
      .get("", { params: { min, max } })
      .then((response) => response.data);
  }
