import { defineStore } from 'pinia'
import { productEndpoints } from '@/router/endpoints'

export const useProductStore = defineStore('product', {
    state: () => ({
        allProducts: [],
    }),
    actions: {
        async fetchProducts() {
            const response = await fetch(productEndpoints.ProductsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(response)
            const data = await response.json()
            console.log(data)

            return response
        }
    }
})