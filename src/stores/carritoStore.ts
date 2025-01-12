import { defineStore } from 'pinia'
import { carritoEndpoints } from '@/router/endpoints'

export const useCarritoStore = defineStore('carrito', {
    state: () => ({
        carrito: []
    }),
    actions: {
        async fetchCarrito() {
            const response = await fetch(carritoEndpoints.GETCarritoEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`
                }
            })

            const data = await response.json()

            if (response.status === 200) {

                localStorage.setItem('carrito', JSON.stringify(data.linCarritos))

                this.carrito = data
            }

            console.log(this.carrito)

            return {
                status: response.status,
                message: data.message
            }
        },

        clearCarritoLogout() {
            localStorage.removeItem('carrito')
            this.carrito = []
        }
    }
})