import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'
import { AuthenticationControllerImplApiFp } from '@/generated'
import { authEndpoints } from '@/router/endpoints'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        user: ''
    }),
    actions: {
        async register(userData: RegisterRequest) {
            
            const response = await fetch(authEndpoints.RegisterEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            console.log(response)

            return response
        }
    }
})