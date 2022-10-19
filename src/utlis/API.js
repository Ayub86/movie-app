import axios from 'axios'
// import baseUrl from './baseUrl'
let token = localStorage.getItem("token")
const API = axios.create({
    baseURL: "https://uploadmoviesapp.herokuapp.com/director",
    responseType: 'json',
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
})

export default API