import axios from "axios";

axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken')

    if (config.method === 'patch') {
        config.headers['Content-Type'] = 'application/merge-patch+json'
    } else {
        config.headers['Content-Type'] = 'application/ld+json'
    }

    config.baseURL = import.meta.env.VITE_API_URL + '/api'

    return config
})

export default axios
