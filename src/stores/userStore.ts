import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        user: ''
    }),
    actions: {
        register(userData: RegisterRequest) {
            
        }
    }
})