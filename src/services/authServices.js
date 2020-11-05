require('dotenv').config()
import http from "./httpServices";
export function login(email, password) {
  const URL = `${process.env.URL}login`;
  return http.post(URL, {
    email: email,
    password: password,
  });
}
