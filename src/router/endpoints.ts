const baseUrl = 'http://34.58.119.248:8080';


//Demo Endpoints
export const DemoEndpoint = baseUrl + '/demo'
export const RoleUserEndpoint = baseUrl + '/api/v1/demo/role/user'
export const RoleHotelEndpoint = baseUrl + '/api/v1/auth/demo/role/hotel'
export const RoleGymEndpoint = baseUrl + '/api/v1/auth/demo/role/gym'
export const RoleAdminEndpoint = baseUrl + '/api/v1/auth/demo/role/admin'

export const demoEndpoints = {
    DemoEndpoint,
    RoleUserEndpoint,
    RoleHotelEndpoint,
    RoleGymEndpoint,
    RoleAdminEndpoint
}

//Auth Endpoints
export const VerificarionResendEndpoint = baseUrl + '/api/v1/auth/verification/resend';
export const RegisterEndpoint = baseUrl + '/api/v1/auth/register';
export const RecoverEndpoint = baseUrl + '/api/v1/auth/recover';
export const RecoverSendEndpoint = baseUrl + '/api/v1/auth/recover/send';
export const LogoutEndpoint = baseUrl + '/api/v1/auth/logout';
export const LoginEndpoint = baseUrl + '/api/v1/auth/login';
export const VerificarionVerityEndpoint = baseUrl + '/api/v1/auth/verification/verify';

export const authEndpoints = {
    VerificarionResendEndpoint,
    RegisterEndpoint,
    RecoverEndpoint,
    RecoverSendEndpoint,
    LogoutEndpoint,
    LoginEndpoint,
    VerificarionVerityEndpoint
}

//Products Endpoints
export const POSTProductEndpoint = baseUrl + '/lewkin/api/producto/nuevo';
export const POSTUpdateProductEndpoint = baseUrl + '/lewkin/api/producto/{id}/actualizar';
export const POSTImagenProductoEndpoint = baseUrl + '/lewkin/api/producto/{id}/foto/subir'
export const POSTReponerProductoEndpoint = baseUrl + '/lewkin/api/producto/reponer'
export const GETProductsEndpoint = baseUrl + '/lewkin/api/productos';
export const GETProductEndpoint = baseUrl + '/lewkin/api/producto/{id}';
export const DELETEProductEndpoint = baseUrl + '/lewkin/api/producto/{id}/eliminar';
export const GETMenProductsEndpoint = baseUrl + '/lewkin/api/productos/hombre';
export const GETWomenProductsEndpoint = baseUrl + '/lewkin/api/productos/mujer';
export const GETNinoProductsEndpoint = baseUrl + '/lewkin/api/productos/nino';
export const GETNinaProductsEndpoint = baseUrl + '/lewkin/api/productos/nina';
export const GETDestacadosEndpoint = baseUrl + '/lewkin/api/productos/destacados'

export const productEndpoints = {
    POSTProductEndpoint,
    POSTUpdateProductEndpoint,
    POSTImagenProductoEndpoint,
    POSTReponerProductoEndpoint,
    GETProductsEndpoint,
    GETProductEndpoint,
    DELETEProductEndpoint,
    GETMenProductsEndpoint,
    GETWomenProductsEndpoint,
    GETNinoProductsEndpoint,
    GETNinaProductsEndpoint,
    GETDestacadosEndpoint
}

//Direccion Endpoints
export const POSTDireccionEndpoint = baseUrl + '/direccion/nueva'
export const POSTUpdateDireccionEndpoint = baseUrl + '/direccion/{id}/modificar'
export const GETUsuarioDireccionesEndpoint = baseUrl + '/usuario/direcciones'
export const GETDireccionesEndpoint = baseUrl + '/direcciones'
export const GETDireccionEndpoint = baseUrl + '/direccion/{id}'
export const DELETEDireccionEndpoint = baseUrl + '/direccion/{id}/eliminar'

export const direccionEndpoints = {
    POSTDireccionEndpoint,
    POSTUpdateDireccionEndpoint,
    GETUsuarioDireccionesEndpoint,
    GETDireccionesEndpoint,
    GETDireccionEndpoint,
    DELETEDireccionEndpoint
}

//Comentario Endpoints
export const POSTComentarioEndpoint = baseUrl + '/lewkin/api/comentar'
export const POSTUpdateComentarioEndpoint = baseUrl + '/lewkin/api/comentario/{id}/modificar'
export const GETComentariosEndpoint = baseUrl + '/lewkin/api/comentarios'
export const GETComentarioEndpoint = baseUrl + '/lewkin/api/comentario/{comentarioId}'
export const DELETEComentarioEndpoint = baseUrl + '/lewkin/api/comentario/{comentarioId}/eliminar'

export const comentarioEndpoints = {
    POSTComentarioEndpoint,
    POSTUpdateComentarioEndpoint,
    GETComentariosEndpoint,
    GETComentarioEndpoint,
    DELETEComentarioEndpoint
}

//Carrito Endpoints
export const PUTIncrementProductEndpoint = baseUrl + '/lewkin/api/carrito/linCarrito/{idLinCarrito}/increment'
export const PUTDecrementProductEndpoint = baseUrl + '/lewkin/api/carrito/linCarrito/{idLinCarrito}/decrement'
export const POSTAddProductEndpoint = baseUrl + '/lewkin/api/carrito/linCarrito'
export const GETCarritoEndpoint = baseUrl + '/lewkin/api/carrito'
export const DELETECarritoEndpoint = baseUrl + '/lewkin/api/carrito/linCarrito/{idLinCarrito}'
export const ADDLineCarritoEndpoint = baseUrl + '/lewkin/api/carrito/linCarrito'

export const carritoEndpoints = {
    PUTIncrementProductEndpoint,
    PUTDecrementProductEndpoint,
    POSTAddProductEndpoint,
    GETCarritoEndpoint,
    DELETECarritoEndpoint,
    ADDLineCarritoEndpoint,
}

//Pedido Endpoints
export const POSTUpdatePedidoEndpoint = baseUrl + '/lewkin/api/pedido/{idPedido}/modificar'
export const POSTPedidoEndpoint = baseUrl + '/lewkin/api/pedido/nuevo'
export const POSTPaymentCallbackEndpoint = baseUrl + '/lewkin/api/pedido/pagado'
export const GETPedidosUsuarioEndpoint = baseUrl + '/lewkin/api/usuario/pedidos'
export const GETPedidosEndpoint = baseUrl + '/lewkin/api/pedidos'
export const GETPedidoEndpoint = baseUrl + '/lewkin/api/pedido/{idPedido}'

export const pedidoEndpoints = {
    POSTUpdatePedidoEndpoint,
    POSTPedidoEndpoint,
    POSTPaymentCallbackEndpoint,
    GETPedidosUsuarioEndpoint,
    GETPedidosEndpoint,
    GETPedidoEndpoint
}

//Usuario Endpoints
export const POSTDireccionUsuarioEndpoint = baseUrl + '/lewkin/api/usuario/nueva/direccion'
export const POSTUpdateUsuarioEndpoint = baseUrl + '/lewkin/api/usuario/modificar'
export const GETUsuarioEndpoint = baseUrl + '/lewkin/api/usuario/{usuarioId}'
export const GETUsuariosEndpoint = baseUrl + '/lewkin/api/usuarios'
export const GETCurrentUsuarioEndpoint = baseUrl + '/lewkin/api/usuario/actual'

export const usuarioEndpoints = {
    POSTDireccionUsuarioEndpoint,
    POSTUpdateUsuarioEndpoint,
    GETUsuarioEndpoint,
    GETUsuariosEndpoint,
    GETCurrentUsuarioEndpoint
}

//Otros
export const GETMaterialesEndpoint = baseUrl + '/lewkin/api/materiales'
export const GETCategoriasEndpoint = baseUrl + '/lewkin/api/categorias'
export const GETSubcategoriasEndpoint = baseUrl + '/lewkin/api/subcategorias'
export const GETColeccionesEndpoint = baseUrl + '/lewkin/api/colecciones'
export const POSTColeccionEndpoint = baseUrl + '/lewkin/api/coleccion/nueva'
export const GETTallasEndpoint = baseUrl + '/lewkin/api/tallas'