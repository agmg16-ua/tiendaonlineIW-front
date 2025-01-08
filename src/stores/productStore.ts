import { defineStore } from 'pinia'
import { productEndpoints } from '@/router/endpoints'

export const useProductStore = defineStore('product', {
    state: () => ({
        allProducts: [],
        singleProduct: null,
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
        },
        async fetchMenProducts() {
            await fetch(productEndpoints.GETMenProductsEndpoint, {
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
        },
        async fetchWomenProducts() {
            await fetch(productEndpoints.GETWomenProductsEndpoint, {
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
        },
        async fetchNinoProducts() {
            await fetch(productEndpoints.GETNinoProductsEndpoint, {
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
        },
        async fetchNinaProducts() {
            await fetch(productEndpoints.GETNinaProductsEndpoint, {
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
        },
        async fetchSingleProduct(productId: number) {
            const url = productEndpoints.GETProductEndpoint.replace('{id}', productId.toString());
            await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.singleProduct = data
            })
            .catch(error => {
                console.error('Error al obtener el producto individual:', error)
            })
        }
    }
})