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
            try {
                const response = await fetch(authEndpoints.RegisterEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })

                const data = await response.json()

                //Se guardan los datos en el localStorage
                localStorage.setItem('tokenJWT', data.jwt)
                localStorage.setItem('isAuthenticated', 'true')
                localStorage.setItem('email', userData.email)

                //... y en el store
                this.jwt = data.jwt
                this.isAuthenticated = true
                this.userEmail = userData.email

            } catch(error) {
                console.error("Error en la solicitud de registro")
                throw new Error()
            }
        },

        async login(userData: LoginRequest) {
            try {
                const response = await fetch(authEndpoints.LoginEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                })

                const data = await response.json()

                if (response.status === 200) {

                    localStorage.setItem('tokenJWT', data.jwt)
                    localStorage.setItem('email', userData.email)
                    localStorage.setItem('isAuthenticated', 'true')

                    this.jwt = data.jwt
                    this.isAuthenticated = true
                    this.userEmail = userData.email
                }

                return {
                    status: response.status,
                    message: data.message
                }
                
            } catch(error) {
                console.error("Error en la solicitud de login")
                throw new Error()
            }
            
        },

        async logout() {
            try {
                const response = await fetch(authEndpoints.LogoutEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                console.log(await response.json())

                //Se eliminan las credenciales de localStotage
                localStorage.removeItem('email')
                localStorage.removeItem('tokenJWT')
                localStorage.removeItem('isAuthenticated')

                //...y del store
                this.jwt = ""
                this.isAuthenticated = false
                this.userEmail = ""
            } catch (error) {
                throw new Error()
            }
        },

        initialize() {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
            const token = localStorage.getItem('tokenJWT')
            const userEmail = localStorage.getItem('email')

            if (isAuthenticated && token && userEmail) {
                this.jwt = token
                this.isAuthenticated = true
                this.userEmail = userEmail
            }
        }
    }
})