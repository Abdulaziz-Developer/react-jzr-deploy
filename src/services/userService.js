require('dotenv').config()
import http from "./httpServices.js";

export function register(user) {
  const URL = `${process.env.URL}register`;
  return http.post(URL, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
