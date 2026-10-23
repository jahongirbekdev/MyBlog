import axios from 'axios'

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    // Foydalanuvchi avtorizatsiyasi uchun to‘g‘ri content-type
    if (config.url?.includes('/users/auth')) {
        config.headers['Content-Type'] = 'application/ld+json'
    } else if (config.method === 'patch') {
        config.headers['Content-Type'] = 'application/merge-patch+json'
    } else if (config.method === 'post') {
        config.headers['Content-Type'] = 'application/ld+json'
    }

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    config.baseURL = import.meta.env.VITE_API_DOMEN + '/api'

    return config
}, error => {
    return Promise.reject(error)
})

export { axios }
