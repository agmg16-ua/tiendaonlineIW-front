import { defineStore } from 'pinia'
import { productEndpoints } from '@/router/endpoints'


export const useAdminStore = defineStore('admin', {
    state: () => ({

    }),
    actions: {
        async getProductos() {
            const response = await fetch(productEndpoints.GETProductsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

            const data = await response.json()

            return {
                status: response.status,
                data: data,
                message: data.message
            }
        }
    }
})