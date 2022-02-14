import axios from 'axios'

export const key = "09b8db7448c421237b5491ae1bca0a172956ee02"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;