import axios from "axios";

export const api = axios.create({
  baseURL: "https://meetup-88c0e-default-rtdb.firebaseio.com",
});
