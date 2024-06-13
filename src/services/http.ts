import axios from "axios";

const http = axios.create({
    baseURL: "https://reqres.in/api",
    headers:{
        "Content-Type": "application/json",
    }
})

export default http;