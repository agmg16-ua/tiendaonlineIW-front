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
        async addProductCarrito(productoId: number, cantidad: number, talla: string, precio: number) {
            try {
                // Realizamos el fetch al backend para añadir el producto al carrito
                const response = await fetch(carritoEndpoints.ADDLineCarritoEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}` // Token JWT
                    },
                    body: JSON.stringify({
                        productoId: productoId, // ID del producto que queremos añadir
                        cantidad: cantidad,     // Cantidad a añadir
                        talla: talla,           // Talla seleccionada
                        precio: precio          // Precio actual del producto
                    })
                });
        
                const data = await response.json();
        
                // Devolvemos el resultado al componente
                return {
                    status: response.status,
                    data: data,
                    message: response.ok ? 'Producto añadido correctamente.' : (data.message || 'Error al añadir producto')
                };
            } catch (error) {
                console.error('Error al comunicarse con el servidor:', error);
                return {
                    status: 500,
                    message: 'Error al comunicarse con el servidor.'
                };
            }
        },
        async incrementarLinCarrito(idLinCarrito: number) {
            try {
                // Realizamos el fetch al backend para incrementar la cantidad de la línea del carrito
                const url = carritoEndpoints.PUTIncrementProductEndpoint.replace('{idLinCarrito}', idLinCarrito.toString());
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}` // Token JWT
                    }
                });

                const data = await response.json();

                if (response.status === 200) {
                    // Actualizamos el carrito en el estado y en localStorage
                    this.carrito = data;
                    localStorage.setItem('carrito', JSON.stringify(data.linCarritos));
                }

                return {
                    status: response.status,
                    data: data,
                    message: response.ok ? 'Cantidad incrementada correctamente.' : (data.message || 'Error al incrementar la cantidad')
                };
            } catch (error) {
                console.error('Error al comunicarse con el servidor:', error);
                return {
                    status: 500,
                    message: 'Error al comunicarse con el servidor.'
                };
            }
        },
        async decrementarLinCarrito(idLinCarrito: number) {
            try {
                // Realizamos el fetch al backend para incrementar la cantidad de la línea del carrito
                const url = carritoEndpoints.PUTDecrementProductEndpoint.replace('{idLinCarrito}', idLinCarrito.toString());
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}` // Token JWT
                    }
                });

                const data = await response.json();

                if (response.status === 200) {
                    // Actualizamos el carrito en el estado y en localStorage
                    this.carrito = data;
                    localStorage.setItem('carrito', JSON.stringify(data.linCarritos));
                }

                return {
                    status: response.status,
                    data: data,
                    message: response.ok ? 'Cantidad decrementada correctamente.' : (data.message || 'Error al decrementar la cantidad')
                };
            } catch (error) {
                console.error('Error al comunicarse con el servidor:', error);
                return {
                    status: 500,
                    message: 'Error al comunicarse con el servidor.'
                };
            }
        },
        async deleteLinCarrito(idLinCarrito: number) {
            try {
                // Realizamos el fetch al backend para incrementar la cantidad de la línea del carrito
                const url = carritoEndpoints.DELETECarritoEndpoint.replace('{idLinCarrito}', idLinCarrito.toString());
                const response = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}` // Token JWT
                    }
                });

                const data = await response.json();

                if (response.status === 200) {
                    // Actualizamos el carrito en el estado y en localStorage
                    this.carrito = data;
                    localStorage.setItem('carrito', JSON.stringify(data.linCarritos));
                }

                return {
                    status: response.status,
                    data: data,
                    message: response.ok ? 'Linea eliminada correctamente.' : (data.message || 'Error al eliminar linea')
                };
            } catch (error) {
                console.error('Error al comunicarse con el servidor:', error);
                return {
                    status: 500,
                    message: 'Error al comunicarse con el servidor.'
                };
            }
        },
        clearCarritoLogout() {
            localStorage.removeItem('carrito')
            this.carrito = []
        }
    }
})