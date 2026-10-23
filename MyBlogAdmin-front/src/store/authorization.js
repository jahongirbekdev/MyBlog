import { defineStore } from 'pinia'
import { axios } from '@/plugins/axios'

export const useAuthorizationStore = defineStore('authorization', {
    actions: {
        auth(data) {
            return new Promise((resolve, reject) => {
                axios.post('/users/auth', data)
                    .then((response) => {
                        const token = response.data.accessToken
                        if (!token) {
                            console.error('Token topilmadi:', response.data)
                            return reject(new Error('Token topilmadi!'))
                        }
                            //
                        alert('Token muvaffaqiyatli olindi!')
                        localStorage.setItem('token', token)
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
})
