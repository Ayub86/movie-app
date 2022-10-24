import axios from "axios"
let token = localStorage.getItem("authToken");
console.log(token,"=====token")
const API= axios.create({
    baseURL: "https://uploadmoviesapp.herokuapp.com",
    responseType: "json",
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
})
export default API