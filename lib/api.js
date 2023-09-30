import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.realworld.io/api",
  headers: { "Content-Type": "application/json" },
});
