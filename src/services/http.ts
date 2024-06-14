import axios from "axios";

const http = axios.create({
    baseURL: "https://6bec0db8-2b06-41d5-9ecd-f226d9394cd9-00-2zn0acr064hq8.pike.replit.dev",
    headers:{
        "Content-Type": "application/json",
    }
})

export default http;


// I uses express  serverto generate the token  in replit and then used it here;