import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'
import LoginRequest from '@/generated/src/model/LoginRequest'
import { authEndpoints, direccionEndpoints, pedidoEndpoints } from '@/router/endpoints'
import { useCarritoStore } from '@/stores/store'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        userEmail: '',
        direcciones: [] as Array<any>
    }),
    actions: {
        //Acctiones de auth
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

                console.log(response.status)

                if (response.status === 200) {
                    //Se guardan los datos en el localStorage
                    localStorage.setItem('tokenJWT', data.jwt)
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('email', userData.email)

                    //... y en el store
                    this.jwt = data.jwt
                    this.isAuthenticated = true
                    this.userEmail = userData.email

                    return {
                        status: response.status,
                        message: data.message
                    }
                }

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

                //... y otros stores
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
        },

        //Acciones de usuario
        async fetchDirecciones() {
            try {
                const response = await fetch(direccionEndpoints.GETUsuarioDireccionesEndpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    }
                })

                const data = await response.json()

                this.direcciones = data

            } catch (error) {
                console.error(error)
                throw new Error()
            }
        },

        async newPedido(direccionId: Number) {
            try {
                const response = await fetch(pedidoEndpoints.POSTPedidoEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    },
                    body: JSON.stringify({
                        "direccionId": direccionId
                    })
                })

                console.log(response)

                const data = await response.json()

                if (response.status === 200) {
                    localStorage.setItem('pedidoRedirect', data.pedidoId)
                }

                return {
                    status: response.status,
                    message: data.message,
                    url: data.url
                }

            } catch (error) {
                console.error(error)
                throw new Error()
            }
        },

        async sendPaymentCallback(pedidoId: Number) {
            try {
                /*
                const response = await fetch(pedidoEndpoints.POSTPaymentCallbackEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    },
                    body: JSON.stringify({
                        "pagado": true,
                        "referencia": pedidoId
                    })
                })

                const data = await response.json()

                if (response.status === 200) {
                    localStorage.removeItem('pedidoRedirect')
                }

                */
            } catch (error) {
                console.error(error)
                throw new Error()
            }
        }
    }
})