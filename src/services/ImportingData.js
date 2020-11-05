require('dotenv').config()
import jwt from "jwt-decode";
const api = async() => {
    let jwty = jwt(JSON.stringify(localStorage.getItem("jwt")));
    let id = jwty.sub
    return await fetch(`${process.env.URL}Courses/${id}`)
    .then((res) => res.json())
    .then((res) =>  console.log(JSON.stringify(res)))
    .catch((err) => err); 
    };
export default api;