import { defineStore } from 'pinia'
import { GETMaterialesEndpoint, GETCategoriasEndpoint, GETSubcategoriasEndpoint, GETColeccionesEndpoint, productEndpoints, usuarioEndpoints, POSTColeccionEndpoint } from '@/router/endpoints'


export const useAdminStore = defineStore('admin', {
    state: () => ({

    }),
    actions: {
        async fetchAllUsuarios() {
            const response = await fetch(usuarioEndpoints.GETUsuariosEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async saveProducto(producto: any) {
            producto.precio = parseInt(producto.precio)

            console.log(producto)

            console.log(JSON.stringify(producto))

            const response = await fetch(productEndpoints.POSTProductEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async fetchMateriales() {
            const response = await fetch(GETMaterialesEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async fetchCategorias() {
            const response = await fetch(GETCategoriasEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async fetchSubcategorias() {
            const response = await fetch(GETSubcategoriasEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async fetchColecciones() {
            const response = await fetch(GETColeccionesEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        },

        async saveNewColeccion(coleccion: any) {
            console.log(coleccion)
            const dataToSend = JSON.stringify(coleccion)
            const response = await fetch(POSTColeccionEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: dataToSend
            })

            console.log(response)

            const data = await response.json()

            console.log(data)
        }
    }
})
