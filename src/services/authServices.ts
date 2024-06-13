import http from "./http"


export const signUp = async (email: string, password: string) => {
    return http.post("/register", {email, password})
}
export const login = async (email: string, password: string) => {
    return http.post("/login", {email, password})
}

