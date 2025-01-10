import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'
import LoginRequest from '@/generated/src/model/LoginRequest'
import { authEndpoints } from '@/router/endpoints'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        userEmail: ''
    }),
    actions: {
        async register(userData: RegisterRequest) {
            await fetch(authEndpoints.RegisterEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
                this.jwt = data.jwt
                this.isAuthenticated = true
                this.userEmail = userData.email
            })
            .catch(error => {
                console.error('Error en la solicitud Register:', error)
            })
        },

        async login(userData: LoginRequest) {
            await fetch(authEndpoints.LoginEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                this.jwt = data.jwt
                this.isAuthenticated = true
                this.userEmail = userData.email
            })
            .catch(error => {
                console.error('Error en la solicitud Login:', error)
            })
        }
    }
})