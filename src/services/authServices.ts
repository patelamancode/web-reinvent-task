import http from "./http"


export const signUp = async (email: string, password: string) => {
    return http.post("/signup", {email, password})
}
export const login = async (email: string, password: string) => {
    return http.post("/login", {email, password})
}

