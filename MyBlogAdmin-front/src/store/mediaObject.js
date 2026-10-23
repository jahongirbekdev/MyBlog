import {defineStore} from "pinia"
import {axios} from "@/plugins/axios.js"

export  const mediaObject= defineStore('mediaObject', {
    actions: {
        createImage(data) {
            return new Promise((resolve, reject) => {
                axios.post('/media_objects', data)
                    .then((response) => {
                        console.log('Rasm joylandi')
                        console.log(response)

                        this.image = response.data['@id']

                        resolve()
                    })
                    .catch(() => {
                        console.log('Rasm joylashda xatolik!')
                        reject()
                    })
            })
        }
    },
    state() {
        return {
            image: null
        }
    },
    getters: {
        getImage() {
            return this.image
        }
    }
})