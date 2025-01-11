import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'
import LoginRequest from '@/generated/src/model/LoginRequest'
import { authEndpoints } from '@/router/endpoints'
import { useCarritoStore } from '@/stores/store'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        userEmail: '',
        direcciones: [
            {
                id: 1,
                calle: "Calle 1",
                numero: "1",
                localidad: "Localidad 1",
                provincia: "Provincia 1",
                codigoPostal: "1234"
            },
            {
                id: 2,
                calle: "Calle 2",
                numero: "2",
                localidad: "Localidad 2",
                provincia: "Provincia 2",
                codigoPostal: "5678"
            },
            {
                id: 3,
                calle: "Calle 3",
                numero: "3",
                localidad: "Localidad 3",
                provincia: "Provincia 3",
                codigoPostal: "9012"
            }
        ]
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

                    //... y cargamos otros recursos del usuario
                    useCarritoStore().fetchCarrito()
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
                await fetch(authEndpoints.LogoutEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    },
                    mode: 'no-cors'
                })

                //Se eliminan las credenciales de localStotage
                localStorage.removeItem('email')
                localStorage.removeItem('tokenJWT')
                localStorage.removeItem('isAuthenticated')

                //...y del store
                this.jwt = ""
                this.isAuthenticated = false
                this.userEmail = ""

                //...y se eliminan otros datos del usuario
                useCarritoStore().clearCarritoLogout()
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