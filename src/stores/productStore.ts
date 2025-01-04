import { defineStore } from 'pinia'
import { productEndpoints } from '@/router/endpoints'

export const useProductStore = defineStore('product', {
    state: () => ({
        allProducts: [],
    }),
    actions: {
        async fetchProducts() {
            await fetch(productEndpoints.GETProductsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.allProducts = data
            })
            .catch(error => {
                console.error('Error en la solicitud de productos:', error)
            })
        }
    }
})