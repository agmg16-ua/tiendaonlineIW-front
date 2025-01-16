import { defineStore } from 'pinia'
import { GETMaterialesEndpoint, GETCategoriasEndpoint, GETSubcategoriasEndpoint, GETColeccionesEndpoint, productEndpoints } from '@/router/endpoints'


export const useAdminStore = defineStore('admin', {
    state: () => ({

    }),
    actions: {
        async fetchAllUsuarios() {
            console.log('fetching all usuarios')
        },

        async saveProducto(producto: any) {
            producto.precio = parseInt(producto.precio)

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
        }
    }
})
