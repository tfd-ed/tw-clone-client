import {defineStore} from 'pinia'
import axios from "axios"
import {useAuthStore} from './auth'

export const useTweetsStore = defineStore('tweets', {
    state: () => ({
        tweets: [],
    }),
    actions: {
        async fetchTweets() {
            const authStore = useAuthStore()
            try {
                const response = await axios.get(process.env.VUE_APP_ENV_SERVER + '/api/tweets', {
                    headers: {
                        'Authorization': `Bearer ${authStore.token}`
                    }
                })
                this.tweets = response.data
            } catch (e) {
                console.log(e)
            }
        },
        async addTweet(text) {
            const authStore = useAuthStore()
            try {
                const response = await axios.post(process.env.VUE_APP_ENV_SERVER + '/api/tweets', {
                    text: text
                }, {
                    headers: {
                        'Authorization': `Bearer ${authStore.token}`
                    },
                })
                this.tweets.push(response.data)
            } catch (e) {
                console.log(e)
            }

        },
        removeTweet(index) {
            this.tweets.splice(index, 1)
        }
    }
})