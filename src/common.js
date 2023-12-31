export const EXPIRES_IN = "EXPIRES_IN"
export const ACCESS_TOKEN = "ACCESS_TOKEN"
export const TOKEN_TYPE = "TOKEN_TYPE"

const APP_URL = import.meta.env.VITE_APP_URL

export const ENDPOINT = {
    userInfo: "me"
}

export const logout = () => {  
    localStorage.removeItem(ACCESS_TOKEN)  
    localStorage.removeItem(TOKEN_TYPE)  
    localStorage.removeItem(EXPIRES_IN)
    window.location.href = APP_URL
}