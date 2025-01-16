import { defineStore } from 'pinia'
import RegisterRequest from '@/generated/src/model/RegisterRequest'
import LoginRequest from '@/generated/src/model/LoginRequest'
import { authEndpoints, carritoEndpoints, direccionEndpoints, pedidoEndpoints, usuarioEndpoints } from '@/router/endpoints'
import { useCarritoStore } from '@/stores/store'

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        jwt: '',
        userEmail: '',
        role: '',
        direcciones: [] as Array<any>,
        currentUserData: {} as any
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
                    localStorage.setItem('role', data.role)

                    //... y en el store
                    this.jwt = data.jwt
                    this.isAuthenticated = true
                    this.userEmail = userData.email
                    this.role = data.role

                    //.. y realizamos tareas sobre el carrito
                    if (localStorage.getItem('carrito')) {
                        //.. y realizamos tareas sobre el carrito
                        if (localStorage.getItem('carrito')) {
                            console.log("Carrito encontrado")
                            const localCarrito = JSON.parse(localStorage.getItem('carrito') || '{}')

                            let data = {}

                            for (let item of localCarrito) {
                                const response = await fetch(carritoEndpoints.POSTAddProductEndpoint, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                                    },
                                    body: JSON.stringify({
                                        "cantidad": item.cantidad,
                                        "productoId": item.id,
                                        "talla": item.talla,
                                        "precio": item.precio
                                    })
                                })

                                data = await response.json()
                            }

                            console.log(data)
                            localStorage.setItem('carrito', JSON.stringify(data.linCarritos))
                        }
                    }

                    return {
                        status: response.status,
                        message: data.message
                    }
                }

                return {
                    response: response.status,
                    message: data.message,
                }

            } catch (error) {
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
                    localStorage.setItem('role', data.role)

                    this.jwt = data.jwt
                    this.isAuthenticated = true
                    this.userEmail = userData.email
                    this.role = data.role

                    //.. y realizamos tareas sobre el carrito
                    if (localStorage.getItem('carrito')) {
                        console.log("Carrito encontrado")
                        const localCarrito = JSON.parse(localStorage.getItem('carrito') || '{}')

                        let data = {}

                        for (let item of localCarrito) {
                            const response = await fetch(carritoEndpoints.POSTAddProductEndpoint, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                                },
                                body: JSON.stringify({
                                    "cantidad": item.cantidad,
                                    "productoId": item.id,
                                    "talla": item.talla,
                                    "precio": item.precio
                                })
                            })

                            data = await response.json()
                        }

                        console.log(data)
                        localStorage.setItem('carrito', JSON.stringify(data.linCarritos))
                    }
                }

                return {
                    status: response.status,
                    message: data.message
                }

            } catch (error) {
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
                localStorage.removeItem('role')

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
            const role = localStorage.getItem('role')

            if (isAuthenticated && token && userEmail && role) {
                this.jwt = token
                this.isAuthenticated = true
                this.userEmail = userEmail
                this.role = role
            }
        },

        async getCurrentUserData() {
            try {
                const response = await fetch(usuarioEndpoints.GETCurrentUsuarioEndpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    }
                })

                const data = await response.json()

                this.currentUserData = data

                return {
                    status: response.status,
                    data: data,
                    message: data.message
                }

            } catch (error) {
                console.error(error)
                throw new Error()
            }
        },

        async updateCurrentUserData(userData: any) {
            console.log("Update user data")
            const dataToSend = JSON.stringify({
                "nombreUsuario": userData.nombreUsuario,
                "nombre": userData.nombre,
                "apellidos": userData.apellidos,
                "telefono": userData.telefono,
                "genero": userData.genero,
                "fechaNacimiento": userData.fechaNacimiento
            })

            try {
                const response = await fetch(usuarioEndpoints.POSTUpdateUsuarioEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    },
                    body: dataToSend
                })

                const data = await response.json()

                return {
                    status: response.status,
                    data: data,
                    message: data.message
                }

            } catch (error) {
                console.error(error)
                throw new Error()
            }
        },

        async postNewUserDirection(direccionData: any) {

            const dataToSend = await JSON.stringify({
                "numero": Number(direccionData.numero),
                "piso": Number(direccionData.piso),
                "pais": direccionData.pais,
                "puerta": direccionData.puerta,
                "calle": direccionData.calle,
                "ciudad": direccionData.ciudad,
                "provincia": direccionData.provincia,
                "cp": Number(direccionData.cp),
            })

            console.log(dataToSend)

            const response = await fetch(usuarioEndpoints.POSTDireccionUsuarioEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                },
                body: dataToSend
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }


        },

        async deleteUserDirection(direccionId: any) {
            const response = await fetch(direccionEndpoints.DELETEDireccionEndpoint.replace('{id}', direccionId), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            return {
                status: response.status,
            }
        },

        async getCurrentUserPedidos() {
            try {
                const response = await fetch(pedidoEndpoints.GETPedidosUsuarioEndpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    }
                })

                const data = await response.json()

                return {
                    status: response.status,
                    data: data,
                    message: data.message
                }
            } catch (error) {
                console.error(error)
                throw new Error()
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
                    localStorage.setItem('pedidoRedirect', data.referencia)
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

        async sendPaymentCallback(pedidoId: any) {
            try {

                console.log(pedidoId)

                console.log(JSON.stringify({
                    "tpvResponseOk": true,
                    "referencia": pedidoId
                }))

                const response = await fetch(pedidoEndpoints.POSTPaymentCallbackEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                    },
                    body: JSON.stringify({
                        "tpvResponseOk": true,
                        "referencia": pedidoId
                    })
                })

                if (response.status === 200) {
                    localStorage.removeItem('pedidoRedirect')
                }


            } catch (error) {
                console.error(error)
                throw new Error()
            }
        }
    }
})